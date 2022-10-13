from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import elbinfo
from . import targetgroupinfo
from . import targetgrouppairinfo


@dataclass_json
@dataclass
class LoadBalancerInfo:
    elb_info_list: Optional[List[elbinfo.ElbInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'elbInfoList' }})
    target_group_info_list: Optional[List[targetgroupinfo.TargetGroupInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetGroupInfoList' }})
    target_group_pair_info_list: Optional[List[targetgrouppairinfo.TargetGroupPairInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetGroupPairInfoList' }})
    
