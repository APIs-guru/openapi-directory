from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import certificatemode_enum
from . import certificatestatus_enum
from . import transferdata
from . import certificatevalidity


@dataclass_json
@dataclass
class CertificateDescription:
    ca_certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caCertificateId' }})
    certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateArn' }})
    certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateId' }})
    certificate_mode: Optional[certificatemode_enum.CertificateModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateMode' }})
    certificate_pem: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificatePem' }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    customer_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerVersion' }})
    generation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generationId' }})
    last_modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    owned_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownedBy' }})
    previous_owned_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previousOwnedBy' }})
    status: Optional[certificatestatus_enum.CertificateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    transfer_data: Optional[transferdata.TransferData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transferData' }})
    validity: Optional[certificatevalidity.CertificateValidity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validity' }})
    
