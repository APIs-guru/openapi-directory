from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NodegroupScalingConfig:
    desired_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredSize' }})
    max_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxSize' }})
    min_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minSize' }})
    
