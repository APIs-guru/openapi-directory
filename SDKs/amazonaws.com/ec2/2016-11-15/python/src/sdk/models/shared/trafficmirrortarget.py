from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class TrafficMirrorTarget:
    r"""TrafficMirrorTarget
    Describes a Traffic Mirror target.
    """
    
    description: Optional[str] = field(default=None)
    network_interface_id: Optional[str] = field(default=None)
    network_load_balancer_arn: Optional[str] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    traffic_mirror_target_id: Optional[str] = field(default=None)
    type: Optional[TrafficMirrorTargetTypeEnum] = field(default=None)
    
