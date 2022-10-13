from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import actiononfailure_enum
from . import hadoopstepconfig
from . import stepstatus


@dataclass_json
@dataclass
class Step:
    action_on_failure: Optional[actiononfailure_enum.ActionOnFailureEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActionOnFailure' }})
    config: Optional[hadoopstepconfig.HadoopStepConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Config' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    status: Optional[stepstatus.StepStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
