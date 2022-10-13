from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import balancingstrategy_enum
from . import gameserverprotectionpolicy_enum
from . import instancedefinition


@dataclass_json
@dataclass
class UpdateGameServerGroupInput:
    balancing_strategy: Optional[balancingstrategy_enum.BalancingStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BalancingStrategy' }})
    game_server_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameServerGroupName' }})
    game_server_protection_policy: Optional[gameserverprotectionpolicy_enum.GameServerProtectionPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameServerProtectionPolicy' }})
    instance_definitions: Optional[List[instancedefinition.InstanceDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceDefinitions' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    
