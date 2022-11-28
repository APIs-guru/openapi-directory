from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class TransitGatewayOptions:
    r"""TransitGatewayOptions
    Describes the options for a transit gateway.
    """
    
    amazon_side_asn: Optional[int] = field(default=None)
    association_default_route_table_id: Optional[str] = field(default=None)
    auto_accept_shared_attachments: Optional[AutoAcceptSharedAttachmentsValueEnum] = field(default=None)
    default_route_table_association: Optional[DefaultRouteTableAssociationValueEnum] = field(default=None)
    default_route_table_propagation: Optional[DefaultRouteTablePropagationValueEnum] = field(default=None)
    dns_support: Optional[DNSSupportValueEnum] = field(default=None)
    multicast_support: Optional[MulticastSupportValueEnum] = field(default=None)
    propagation_default_route_table_id: Optional[str] = field(default=None)
    transit_gateway_cidr_blocks: Optional[List[str]] = field(default=None)
    vpn_ecmp_support: Optional[VpnEcmpSupportValueEnum] = field(default=None)
    
