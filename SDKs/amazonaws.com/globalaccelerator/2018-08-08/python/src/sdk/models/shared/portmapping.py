from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PortMapping:
    r"""PortMapping
    Returns the ports and associated IP addresses and ports of Amazon EC2 instances in your virtual private cloud (VPC) subnets. Custom routing is a port mapping protocol in AWS Global Accelerator that statically associates port ranges with VPC subnets, which allows Global Accelerator to route to specific instances and ports within one or more subnets. 
    """
    
    accelerator_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceleratorPort') }})
    destination_socket_address: Optional[SocketAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationSocketAddress') }})
    destination_traffic_state: Optional[CustomRoutingDestinationTrafficStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationTrafficState') }})
    endpoint_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointGroupArn') }})
    endpoint_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointId') }})
    protocols: Optional[List[CustomRoutingProtocolEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocols') }})
    
