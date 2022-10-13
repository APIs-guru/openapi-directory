from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NodegroupUpdateConfig:
    max_unavailable: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxUnavailable' }})
    max_unavailable_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxUnavailablePercentage' }})
    
