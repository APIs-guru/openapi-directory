from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import triggereventtype_enum


@dataclass_json
@dataclass
class TriggerConfig:
    trigger_events: Optional[List[triggereventtype_enum.TriggerEventTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerEvents' }})
    trigger_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerName' }})
    trigger_target_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerTargetArn' }})
    
