from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import stepcancellationoption_enum


@dataclass_json
@dataclass
class CancelStepsInput:
    cluster_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterId' }})
    step_cancellation_option: Optional[stepcancellationoption_enum.StepCancellationOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StepCancellationOption' }})
    step_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StepIds' }})
    
