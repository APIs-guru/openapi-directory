from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import gameproperty
from . import playersessioncreationpolicy_enum
from . import gamesessionstatus_enum
from . import gamesessionstatusreason_enum


@dataclass_json
@dataclass
class GameSession:
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creator_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatorId' }})
    current_player_session_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentPlayerSessionCount' }})
    dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsName' }})
    fleet_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetArn' }})
    fleet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetId' }})
    game_properties: Optional[List[gameproperty.GameProperty]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameProperties' }})
    game_session_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameSessionData' }})
    game_session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameSessionId' }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpAddress' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Location' }})
    matchmaker_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MatchmakerData' }})
    maximum_player_session_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumPlayerSessionCount' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    player_session_creation_policy: Optional[playersessioncreationpolicy_enum.PlayerSessionCreationPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlayerSessionCreationPolicy' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Port' }})
    status: Optional[gamesessionstatus_enum.GameSessionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_reason: Optional[gamesessionstatusreason_enum.GameSessionStatusReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusReason' }})
    termination_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TerminationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
