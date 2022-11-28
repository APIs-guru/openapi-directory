from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class TransitGatewayMulticastDomainAssociations:
    r"""TransitGatewayMulticastDomainAssociations
    Describes the multicast domain associations.
    """
    
    resource_id: Optional[str] = field(default=None)
    resource_owner_id: Optional[str] = field(default=None)
    resource_type: Optional[TransitGatewayAttachmentResourceTypeEnum] = field(default=None)
    subnets: Optional[List[SubnetAssociation]] = field(default=None)
    transit_gateway_attachment_id: Optional[str] = field(default=None)
    transit_gateway_multicast_domain_id: Optional[str] = field(default=None)
    
