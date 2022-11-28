from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DeregisterTransitGatewayMulticastGroupMembersResult:
    deregistered_multicast_group_members: Optional[TransitGatewayMulticastDeregisteredGroupMembers] = field(default=None)
    
