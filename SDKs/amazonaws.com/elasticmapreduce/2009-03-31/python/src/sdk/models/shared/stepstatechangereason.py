from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import stepstatechangereasoncode_enum


@dataclass_json
@dataclass
class StepStateChangeReason:
    code: Optional[stepstatechangereasoncode_enum.StepStateChangeReasonCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    
