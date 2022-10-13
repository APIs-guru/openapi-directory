from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VpcPeeringAuthorization:
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    expiration_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpirationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    game_lift_aws_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameLiftAwsAccountId' }})
    peer_vpc_aws_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PeerVpcAwsAccountId' }})
    peer_vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PeerVpcId' }})
    
