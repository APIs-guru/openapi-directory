from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import gameservergroupautoscalingpolicy
from . import balancingstrategy_enum
from . import gameserverprotectionpolicy_enum
from . import instancedefinition
from . import launchtemplatespecification
from . import tag


@dataclass_json
@dataclass
class CreateGameServerGroupInput:
    auto_scaling_policy: Optional[gameservergroupautoscalingpolicy.GameServerGroupAutoScalingPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoScalingPolicy' }})
    balancing_strategy: Optional[balancingstrategy_enum.BalancingStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BalancingStrategy' }})
    game_server_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameServerGroupName' }})
    game_server_protection_policy: Optional[gameserverprotectionpolicy_enum.GameServerProtectionPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameServerProtectionPolicy' }})
    instance_definitions: List[instancedefinition.InstanceDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceDefinitions' }})
    launch_template: launchtemplatespecification.LaunchTemplateSpecification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LaunchTemplate' }})
    max_size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxSize' }})
    min_size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinSize' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    vpc_subnets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcSubnets' }})
    
