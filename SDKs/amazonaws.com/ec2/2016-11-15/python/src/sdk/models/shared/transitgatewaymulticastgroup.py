from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class TransitGatewayMulticastGroup:
    r"""TransitGatewayMulticastGroup
    Describes the transit gateway multicast group resources.
    """
    
    group_ip_address: Optional[str] = field(default=None)
    group_member: Optional[bool] = field(default=None)
    group_source: Optional[bool] = field(default=None)
    member_type: Optional[MembershipTypeEnum] = field(default=None)
    network_interface_id: Optional[str] = field(default=None)
    resource_id: Optional[str] = field(default=None)
    resource_owner_id: Optional[str] = field(default=None)
    resource_type: Optional[TransitGatewayAttachmentResourceTypeEnum] = field(default=None)
    source_type: Optional[MembershipTypeEnum] = field(default=None)
    subnet_id: Optional[str] = field(default=None)
    transit_gateway_attachment_id: Optional[str] = field(default=None)
    
