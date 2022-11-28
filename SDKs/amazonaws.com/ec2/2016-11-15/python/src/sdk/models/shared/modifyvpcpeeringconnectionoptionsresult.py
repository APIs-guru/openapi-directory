from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ModifyVpcPeeringConnectionOptionsResult:
    accepter_peering_connection_options: Optional[PeeringConnectionOptions] = field(default=None)
    requester_peering_connection_options: Optional[PeeringConnectionOptions] = field(default=None)
    
