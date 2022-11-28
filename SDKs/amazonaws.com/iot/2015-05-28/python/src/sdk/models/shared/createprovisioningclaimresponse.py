from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateProvisioningClaimResponse:
    certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateId') }})
    certificate_pem: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificatePem') }})
    expiration: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiration'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    key_pair: Optional[KeyPair] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyPair') }})
    
