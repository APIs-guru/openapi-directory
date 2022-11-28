from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class RegisterTransitGatewayMulticastGroupMembersResult:
    registered_multicast_group_members: Optional[TransitGatewayMulticastRegisteredGroupMembers] = field(default=None)
    
