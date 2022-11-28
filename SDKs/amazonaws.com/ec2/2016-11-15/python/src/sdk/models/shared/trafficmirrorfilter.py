from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class TrafficMirrorFilter:
    r"""TrafficMirrorFilter
    Describes the Traffic Mirror filter.
    """
    
    description: Optional[str] = field(default=None)
    egress_filter_rules: Optional[List[TrafficMirrorFilterRule]] = field(default=None)
    ingress_filter_rules: Optional[List[TrafficMirrorFilterRule]] = field(default=None)
    network_services: Optional[List[TrafficMirrorNetworkServiceEnum]] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    traffic_mirror_filter_id: Optional[str] = field(default=None)
    
