from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HTTPRouteAction:
    r"""HTTPRouteAction
    An object representing the traffic distribution requirements for matched HTTP
             requests.
    """
    
    weighted_targets: Optional[List[WeightedTarget]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weightedTargets') }})
    
