from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class TrafficMirrorSession:
    r"""TrafficMirrorSession
    Describes a Traffic Mirror session.
    """
    
    description: Optional[str] = field(default=None)
    network_interface_id: Optional[str] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    packet_length: Optional[int] = field(default=None)
    session_number: Optional[int] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    traffic_mirror_filter_id: Optional[str] = field(default=None)
    traffic_mirror_session_id: Optional[str] = field(default=None)
    traffic_mirror_target_id: Optional[str] = field(default=None)
    virtual_network_id: Optional[int] = field(default=None)
    
