from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DestinationPortMapping:
    r"""DestinationPortMapping
    The port mappings for a specified endpoint IP address (destination).
    """
    
    accelerator_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceleratorArn') }})
    accelerator_socket_addresses: Optional[List[SocketAddress]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceleratorSocketAddresses') }})
    destination_socket_address: Optional[SocketAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationSocketAddress') }})
    destination_traffic_state: Optional[CustomRoutingDestinationTrafficStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationTrafficState') }})
    endpoint_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointGroupArn') }})
    endpoint_group_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointGroupRegion') }})
    endpoint_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointId') }})
    ip_address_type: Optional[IPAddressTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpAddressType') }})
    
