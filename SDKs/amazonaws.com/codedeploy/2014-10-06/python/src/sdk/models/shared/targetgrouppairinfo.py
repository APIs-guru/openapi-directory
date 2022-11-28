from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TargetGroupPairInfo:
    r"""TargetGroupPairInfo
     Information about two target groups and how traffic is routed during an Amazon ECS deployment. An optional test traffic route can be specified. 
    """
    
    prod_traffic_route: Optional[TrafficRoute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prodTrafficRoute') }})
    target_groups: Optional[List[TargetGroupInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetGroups') }})
    test_traffic_route: Optional[TrafficRoute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testTrafficRoute') }})
    
