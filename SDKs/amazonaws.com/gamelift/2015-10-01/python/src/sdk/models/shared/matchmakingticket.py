from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import gamesessionconnectioninfo
from . import player
from . import matchmakingconfigurationstatus_enum


@dataclass_json
@dataclass
class MatchmakingTicket:
    configuration_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationArn' }})
    configuration_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationName' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    estimated_wait_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EstimatedWaitTime' }})
    game_session_connection_info: Optional[gamesessionconnectioninfo.GameSessionConnectionInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameSessionConnectionInfo' }})
    players: Optional[List[player.Player]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Players' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[matchmakingconfigurationstatus_enum.MatchmakingConfigurationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusMessage' }})
    status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusReason' }})
    ticket_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TicketId' }})
    
