from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import gameproperty
from . import placedplayersession
from . import playerlatency
from . import gamesessionplacementstate_enum


@dataclass_json
@dataclass
class GameSessionPlacement:
    dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsName' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    game_properties: Optional[List[gameproperty.GameProperty]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameProperties' }})
    game_session_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameSessionArn' }})
    game_session_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameSessionData' }})
    game_session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameSessionId' }})
    game_session_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameSessionName' }})
    game_session_queue_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameSessionQueueName' }})
    game_session_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameSessionRegion' }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpAddress' }})
    matchmaker_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MatchmakerData' }})
    maximum_player_session_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumPlayerSessionCount' }})
    placed_player_sessions: Optional[List[placedplayersession.PlacedPlayerSession]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlacedPlayerSessions' }})
    placement_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlacementId' }})
    player_latencies: Optional[List[playerlatency.PlayerLatency]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlayerLatencies' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Port' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[gamesessionplacementstate_enum.GameSessionPlacementStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
