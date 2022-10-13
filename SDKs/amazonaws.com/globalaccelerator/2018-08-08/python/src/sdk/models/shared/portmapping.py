from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import socketaddress
from . import customroutingdestinationtrafficstate_enum
from . import customroutingprotocol_enum


@dataclass_json
@dataclass
class PortMapping:
    accelerator_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceleratorPort' }})
    destination_socket_address: Optional[socketaddress.SocketAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationSocketAddress' }})
    destination_traffic_state: Optional[customroutingdestinationtrafficstate_enum.CustomRoutingDestinationTrafficStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationTrafficState' }})
    endpoint_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointGroupArn' }})
    endpoint_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointId' }})
    protocols: Optional[List[customroutingprotocol_enum.CustomRoutingProtocolEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Protocols' }})
    
