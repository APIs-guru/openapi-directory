from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import autoregistrationstatus_enum
from . import cacertificatestatus_enum
from . import certificatevalidity


@dataclass_json
@dataclass
class CaCertificateDescription:
    auto_registration_status: Optional[autoregistrationstatus_enum.AutoRegistrationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoRegistrationStatus' }})
    certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateArn' }})
    certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateId' }})
    certificate_pem: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificatePem' }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    customer_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerVersion' }})
    generation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generationId' }})
    last_modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    owned_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownedBy' }})
    status: Optional[cacertificatestatus_enum.CaCertificateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    validity: Optional[certificatevalidity.CertificateValidity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validity' }})
    
