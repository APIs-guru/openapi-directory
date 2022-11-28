from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class TargetGroupsConfig:
    r"""TargetGroupsConfig
    Describes the target groups to attach to a Spot Fleet. Spot Fleet registers the running Spot Instances with these target groups.
    """
    
    target_groups: Optional[List[TargetGroup]] = field(default=None)
    
