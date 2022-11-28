from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateVpcPeeringConnectionResult:
    vpc_peering_connection: Optional[VpcPeeringConnection] = field(default=None)
    
