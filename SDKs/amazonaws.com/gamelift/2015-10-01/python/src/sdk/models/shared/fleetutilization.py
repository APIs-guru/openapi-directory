from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FleetUtilization:
    active_game_session_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActiveGameSessionCount' }})
    active_server_process_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActiveServerProcessCount' }})
    current_player_session_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentPlayerSessionCount' }})
    fleet_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetArn' }})
    fleet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetId' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Location' }})
    maximum_player_session_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumPlayerSessionCount' }})
    
