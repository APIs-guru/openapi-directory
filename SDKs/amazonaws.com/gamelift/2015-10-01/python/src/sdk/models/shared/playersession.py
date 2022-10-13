from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import playersessionstatus_enum


@dataclass_json
@dataclass
class PlayerSession:
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsName' }})
    fleet_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetArn' }})
    fleet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetId' }})
    game_session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameSessionId' }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpAddress' }})
    player_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlayerData' }})
    player_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlayerId' }})
    player_session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlayerSessionId' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Port' }})
    status: Optional[playersessionstatus_enum.PlayerSessionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    termination_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TerminationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
