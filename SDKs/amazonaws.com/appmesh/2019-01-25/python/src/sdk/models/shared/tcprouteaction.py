from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import weightedtarget


@dataclass_json
@dataclass
class TCPRouteAction:
    weighted_targets: List[weightedtarget.WeightedTarget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weightedTargets' }})
    
