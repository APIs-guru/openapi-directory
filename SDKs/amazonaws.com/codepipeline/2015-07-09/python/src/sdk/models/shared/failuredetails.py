from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import failuretype_enum


@dataclass_json
@dataclass
class FailureDetails:
    external_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalExecutionId' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    type: failuretype_enum.FailureTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
