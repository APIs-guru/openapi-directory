from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VirtualInterface:
    r"""VirtualInterface
    Information about a virtual interface.
    """
    
    address_family: Optional[AddressFamilyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressFamily') }})
    amazon_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amazonAddress') }})
    amazon_side_asn: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amazonSideAsn') }})
    asn: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asn') }})
    auth_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authKey') }})
    aws_device_v2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsDeviceV2') }})
    aws_logical_device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsLogicalDeviceId') }})
    bgp_peers: Optional[List[BgpPeer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bgpPeers') }})
    connection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionId') }})
    customer_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerAddress') }})
    customer_router_config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerRouterConfig') }})
    direct_connect_gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directConnectGatewayId') }})
    jumbo_frame_capable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jumboFrameCapable') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    mtu: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mtu') }})
    owner_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerAccount') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    route_filter_prefixes: Optional[List[RouteFilterPrefix]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routeFilterPrefixes') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    virtual_gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualGatewayId') }})
    virtual_interface_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualInterfaceId') }})
    virtual_interface_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualInterfaceName') }})
    virtual_interface_state: Optional[VirtualInterfaceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualInterfaceState') }})
    virtual_interface_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualInterfaceType') }})
    vlan: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlan') }})
    
