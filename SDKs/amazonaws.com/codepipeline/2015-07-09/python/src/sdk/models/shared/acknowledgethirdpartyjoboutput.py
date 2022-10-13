from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import jobstatus_enum


@dataclass_json
@dataclass
class AcknowledgeThirdPartyJobOutput:
    status: Optional[jobstatus_enum.JobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
