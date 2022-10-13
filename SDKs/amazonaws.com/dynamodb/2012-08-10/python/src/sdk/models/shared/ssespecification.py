from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import ssetype_enum


@dataclass_json
@dataclass
class SseSpecification:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    kms_master_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KMSMasterKeyId' }})
    sse_type: Optional[ssetype_enum.SseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SSEType' }})
    
