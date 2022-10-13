from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import certificatemode_enum
from . import certificatestatus_enum


@dataclass_json
@dataclass
class Certificate:
    certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateArn' }})
    certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateId' }})
    certificate_mode: Optional[certificatemode_enum.CertificateModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateMode' }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[certificatestatus_enum.CertificateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
