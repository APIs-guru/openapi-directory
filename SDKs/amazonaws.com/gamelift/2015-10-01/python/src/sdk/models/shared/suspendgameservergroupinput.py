from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SuspendGameServerGroupInput:
    game_server_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameServerGroupName') }})
    suspend_actions: List[GameServerGroupActionEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuspendActions') }})
    
