from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import ssetype_enum
from . import ssestatus_enum


@dataclass_json
@dataclass
class SseDescription:
    inaccessible_encryption_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InaccessibleEncryptionDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    kms_master_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KMSMasterKeyArn' }})
    sse_type: Optional[ssetype_enum.SseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SSEType' }})
    status: Optional[ssestatus_enum.SseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
