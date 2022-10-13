from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import experimentactionstate


@dataclass_json
@dataclass
class ExperimentAction:
    action_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    start_after: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startAfter' }})
    state: Optional[experimentactionstate.ExperimentActionState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    targets: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targets' }})
    
