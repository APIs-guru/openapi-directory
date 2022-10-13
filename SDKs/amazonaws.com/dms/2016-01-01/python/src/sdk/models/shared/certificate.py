from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Certificate:
    certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateArn' }})
    certificate_creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateCreationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    certificate_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateIdentifier' }})
    certificate_owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateOwner' }})
    certificate_pem: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificatePem' }})
    certificate_wallet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateWallet' }})
    key_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyLength' }})
    signing_algorithm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SigningAlgorithm' }})
    valid_from_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidFromDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    valid_to_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidToDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
