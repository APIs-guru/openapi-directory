from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import vpcpeeringconnectionstatus


@dataclass_json
@dataclass
class VpcPeeringConnection:
    fleet_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetArn' }})
    fleet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetId' }})
    game_lift_vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameLiftVpcId' }})
    ip_v4_cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpV4CidrBlock' }})
    peer_vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PeerVpcId' }})
    status: Optional[vpcpeeringconnectionstatus.VpcPeeringConnectionStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    vpc_peering_connection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcPeeringConnectionId' }})
    
