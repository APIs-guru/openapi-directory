from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateVpcPeeringAuthorizationInput:
    game_lift_aws_account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameLiftAwsAccountId' }})
    peer_vpc_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PeerVpcId' }})
    
