from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import triggertype_enum


@dataclass_json
@dataclass
class ExecutionTrigger:
    trigger_detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerDetail' }})
    trigger_type: Optional[triggertype_enum.TriggerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerType' }})
    
