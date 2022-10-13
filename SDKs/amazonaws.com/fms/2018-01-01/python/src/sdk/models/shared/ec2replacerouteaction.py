from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import actiontarget
from . import actiontarget


@dataclass_json
@dataclass
class Ec2ReplaceRouteAction:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    destination_cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationCidrBlock' }})
    destination_ipv6_cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationIpv6CidrBlock' }})
    destination_prefix_list_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationPrefixListId' }})
    gateway_id: Optional[actiontarget.ActionTarget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GatewayId' }})
    route_table_id: actiontarget.ActionTarget = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RouteTableId' }})
    
