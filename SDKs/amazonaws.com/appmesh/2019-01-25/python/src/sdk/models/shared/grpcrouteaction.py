from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GrpcRouteAction:
    r"""GrpcRouteAction
    An object that represents the action to take if a match is determined.
    """
    
    weighted_targets: List[WeightedTarget] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('weightedTargets') }})
    
