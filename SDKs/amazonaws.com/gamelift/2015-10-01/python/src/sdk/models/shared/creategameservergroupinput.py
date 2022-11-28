from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateGameServerGroupInput:
    game_server_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameServerGroupName') }})
    instance_definitions: List[InstanceDefinition] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceDefinitions') }})
    launch_template: LaunchTemplateSpecification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LaunchTemplate') }})
    max_size: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxSize') }})
    min_size: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinSize') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    auto_scaling_policy: Optional[GameServerGroupAutoScalingPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingPolicy') }})
    balancing_strategy: Optional[BalancingStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BalancingStrategy') }})
    game_server_protection_policy: Optional[GameServerProtectionPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameServerProtectionPolicy') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    vpc_subnets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcSubnets') }})
    
