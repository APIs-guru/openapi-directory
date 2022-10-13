from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteVpcPeeringConnectionInput:
    fleet_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetId' }})
    vpc_peering_connection_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcPeeringConnectionId' }})
    
