from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import scalingaction
from . import scalingtrigger


@dataclass_json
@dataclass
class ScalingRule:
    action: scalingaction.ScalingAction = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    trigger: scalingtrigger.ScalingTrigger = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Trigger' }})
    
