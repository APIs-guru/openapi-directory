from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import certificatestate_enum
from . import certificatetype_enum


@dataclass_json
@dataclass
class CertificateInfo:
    certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateId' }})
    common_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CommonName' }})
    expiry_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpiryDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: Optional[certificatestate_enum.CertificateStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    type: Optional[certificatetype_enum.CertificateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
