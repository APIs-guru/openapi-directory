from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DeregisterTransitGatewayMulticastGroupSourcesResult:
    deregistered_multicast_group_sources: Optional[TransitGatewayMulticastDeregisteredGroupSources] = field(default=None)
    
