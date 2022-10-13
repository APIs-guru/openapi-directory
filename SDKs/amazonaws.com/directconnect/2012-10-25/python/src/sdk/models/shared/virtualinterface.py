from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import addressfamily_enum
from . import bgppeer
from . import routefilterprefix
from . import tag
from . import virtualinterfacestate_enum


@dataclass_json
@dataclass
class VirtualInterface:
    address_family: Optional[addressfamily_enum.AddressFamilyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressFamily' }})
    amazon_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amazonAddress' }})
    amazon_side_asn: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amazonSideAsn' }})
    asn: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asn' }})
    auth_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authKey' }})
    aws_device_v2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsDeviceV2' }})
    aws_logical_device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsLogicalDeviceId' }})
    bgp_peers: Optional[List[bgppeer.BgpPeer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bgpPeers' }})
    connection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionId' }})
    customer_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerAddress' }})
    customer_router_config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerRouterConfig' }})
    direct_connect_gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directConnectGatewayId' }})
    jumbo_frame_capable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jumboFrameCapable' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    mtu: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mtu' }})
    owner_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerAccount' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    route_filter_prefixes: Optional[List[routefilterprefix.RouteFilterPrefix]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routeFilterPrefixes' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    virtual_gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualGatewayId' }})
    virtual_interface_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualInterfaceId' }})
    virtual_interface_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualInterfaceName' }})
    virtual_interface_state: Optional[virtualinterfacestate_enum.VirtualInterfaceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualInterfaceState' }})
    virtual_interface_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualInterfaceType' }})
    vlan: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlan' }})
    
