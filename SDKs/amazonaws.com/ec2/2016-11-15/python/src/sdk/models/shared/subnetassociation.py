from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class SubnetAssociation:
    r"""SubnetAssociation
    Describes the subnet association with the transit gateway multicast domain.
    """
    
    state: Optional[TransitGatewayMulitcastDomainAssociationStateEnum] = field(default=None)
    subnet_id: Optional[str] = field(default=None)
    
