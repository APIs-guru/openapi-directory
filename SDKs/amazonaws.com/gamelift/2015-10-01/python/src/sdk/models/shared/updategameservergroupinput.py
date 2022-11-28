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
class UpdateGameServerGroupInput:
    game_server_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameServerGroupName') }})
    balancing_strategy: Optional[BalancingStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BalancingStrategy') }})
    game_server_protection_policy: Optional[GameServerProtectionPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameServerProtectionPolicy') }})
    instance_definitions: Optional[List[InstanceDefinition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceDefinitions') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    
