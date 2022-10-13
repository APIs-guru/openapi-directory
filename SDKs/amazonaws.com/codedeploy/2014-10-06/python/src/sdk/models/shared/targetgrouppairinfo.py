from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import trafficroute
from . import targetgroupinfo
from . import trafficroute


@dataclass_json
@dataclass
class TargetGroupPairInfo:
    prod_traffic_route: Optional[trafficroute.TrafficRoute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prodTrafficRoute' }})
    target_groups: Optional[List[targetgroupinfo.TargetGroupInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetGroups' }})
    test_traffic_route: Optional[trafficroute.TrafficRoute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testTrafficRoute' }})
    
