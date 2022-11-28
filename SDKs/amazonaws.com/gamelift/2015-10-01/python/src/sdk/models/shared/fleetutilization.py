from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FleetUtilization:
    r"""FleetUtilization
    <p>Current resource utilization statistics in a specified fleet or location. The location value might refer to a fleet's remote location or its home Region.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeFleetUtilization</a> | <a>DescribeFleetLocationUtilization</a> </p>
    """
    
    active_game_session_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActiveGameSessionCount') }})
    active_server_process_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActiveServerProcessCount') }})
    current_player_session_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentPlayerSessionCount') }})
    fleet_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetArn') }})
    fleet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetId') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    maximum_player_session_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumPlayerSessionCount') }})
    
