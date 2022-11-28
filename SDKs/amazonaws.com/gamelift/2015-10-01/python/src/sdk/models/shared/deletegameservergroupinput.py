from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteGameServerGroupInput:
    game_server_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameServerGroupName') }})
    delete_option: Optional[GameServerGroupDeleteOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeleteOption') }})
    
