from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateGameServerInput:
    game_server_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameServerGroupName') }})
    game_server_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameServerId') }})
    game_server_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameServerData') }})
    health_check: Optional[GameServerHealthCheckEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheck') }})
    utilization_status: Optional[GameServerUtilizationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UtilizationStatus') }})
    
