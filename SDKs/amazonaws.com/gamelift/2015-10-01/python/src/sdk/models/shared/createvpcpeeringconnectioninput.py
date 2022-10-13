from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateVpcPeeringConnectionInput:
    fleet_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetId' }})
    peer_vpc_aws_account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PeerVpcAwsAccountId' }})
    peer_vpc_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PeerVpcId' }})
    
