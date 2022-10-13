from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import stepsummary


@dataclass_json
@dataclass
class ListStepsOutput:
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    steps: Optional[List[stepsummary.StepSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Steps' }})
    
