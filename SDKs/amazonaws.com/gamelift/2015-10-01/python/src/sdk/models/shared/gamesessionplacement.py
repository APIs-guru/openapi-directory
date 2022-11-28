from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GameSessionPlacement:
    r"""GameSessionPlacement
    <p>Object that describes a <a>StartGameSessionPlacement</a> request. This object includes the full details of the original request plus the current status and start/end time stamps.</p> <p>Game session placement-related operations include:</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul>
    """
    
    dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsName') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    game_properties: Optional[List[GameProperty]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameProperties') }})
    game_session_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionArn') }})
    game_session_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionData') }})
    game_session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionId') }})
    game_session_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionName') }})
    game_session_queue_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionQueueName') }})
    game_session_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionRegion') }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpAddress') }})
    matchmaker_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MatchmakerData') }})
    maximum_player_session_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumPlayerSessionCount') }})
    placed_player_sessions: Optional[List[PlacedPlayerSession]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlacedPlayerSessions') }})
    placement_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlacementId') }})
    player_latencies: Optional[List[PlayerLatency]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayerLatencies') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Port') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[GameSessionPlacementStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
