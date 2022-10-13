from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Match:
    frame_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frameAddress' }})
    target_frames_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetFramesIndex' }})
    threshold_breach_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thresholdBreachValue' }})
    
