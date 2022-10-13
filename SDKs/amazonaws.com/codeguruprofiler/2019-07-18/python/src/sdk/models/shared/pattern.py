from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Pattern:
    counters_to_aggregate: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countersToAggregate' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resolution_steps: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolutionSteps' }})
    target_frames: Optional[List[List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetFrames' }})
    threshold_percent: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thresholdPercent' }})
    
