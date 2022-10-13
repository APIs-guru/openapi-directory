from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import keypair


@dataclass_json
@dataclass
class CreateProvisioningClaimResponse:
    certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateId' }})
    certificate_pem: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificatePem' }})
    expiration: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiration', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    key_pair: Optional[keypair.KeyPair] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyPair' }})
    
