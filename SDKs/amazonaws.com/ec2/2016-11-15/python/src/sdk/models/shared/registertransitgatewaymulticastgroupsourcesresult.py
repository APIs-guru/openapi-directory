from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class RegisterTransitGatewayMulticastGroupSourcesResult:
    registered_multicast_group_sources: Optional[TransitGatewayMulticastRegisteredGroupSources] = field(default=None)
    
