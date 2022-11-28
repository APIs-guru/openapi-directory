from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeGameServerInstancesOutput:
    game_server_instances: Optional[List[GameServerInstance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameServerInstances') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
