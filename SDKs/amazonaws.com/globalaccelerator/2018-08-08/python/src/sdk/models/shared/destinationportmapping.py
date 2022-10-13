from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import socketaddress
from . import socketaddress
from . import customroutingdestinationtrafficstate_enum
from . import ipaddresstype_enum


@dataclass_json
@dataclass
class DestinationPortMapping:
    accelerator_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceleratorArn' }})
    accelerator_socket_addresses: Optional[List[socketaddress.SocketAddress]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceleratorSocketAddresses' }})
    destination_socket_address: Optional[socketaddress.SocketAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationSocketAddress' }})
    destination_traffic_state: Optional[customroutingdestinationtrafficstate_enum.CustomRoutingDestinationTrafficStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationTrafficState' }})
    endpoint_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointGroupArn' }})
    endpoint_group_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointGroupRegion' }})
    endpoint_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointId' }})
    ip_address_type: Optional[ipaddresstype_enum.IPAddressTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpAddressType' }})
    
