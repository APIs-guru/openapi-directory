from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class TransitGatewayMulticastDomainAssociation:
    r"""TransitGatewayMulticastDomainAssociation
    Describes the resources associated with the transit gateway multicast domain.
    """
    
    resource_id: Optional[str] = field(default=None)
    resource_owner_id: Optional[str] = field(default=None)
    resource_type: Optional[TransitGatewayAttachmentResourceTypeEnum] = field(default=None)
    subnet: Optional[SubnetAssociation] = field(default=None)
    transit_gateway_attachment_id: Optional[str] = field(default=None)
    
