from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LoadBalancerInfo:
    r"""LoadBalancerInfo
    Information about the Elastic Load Balancing load balancer or target group used in a deployment.
    """
    
    elb_info_list: Optional[List[ElbInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elbInfoList') }})
    target_group_info_list: Optional[List[TargetGroupInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetGroupInfoList') }})
    target_group_pair_info_list: Optional[List[TargetGroupPairInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetGroupPairInfoList') }})
    
