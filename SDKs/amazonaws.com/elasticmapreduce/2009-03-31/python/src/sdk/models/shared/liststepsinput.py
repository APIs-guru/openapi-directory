from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import stepstate_enum


@dataclass_json
@dataclass
class ListStepsInput:
    cluster_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterId' }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    step_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StepIds' }})
    step_states: Optional[List[stepstate_enum.StepStateEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StepStates' }})
    
