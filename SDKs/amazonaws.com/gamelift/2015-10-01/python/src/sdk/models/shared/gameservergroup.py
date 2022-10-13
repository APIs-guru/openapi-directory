from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import balancingstrategy_enum
from . import gameserverprotectionpolicy_enum
from . import instancedefinition
from . import gameservergroupstatus_enum
from . import gameservergroupaction_enum


@dataclass_json
@dataclass
class GameServerGroup:
    auto_scaling_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoScalingGroupArn' }})
    balancing_strategy: Optional[balancingstrategy_enum.BalancingStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BalancingStrategy' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    game_server_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameServerGroupArn' }})
    game_server_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameServerGroupName' }})
    game_server_protection_policy: Optional[gameserverprotectionpolicy_enum.GameServerProtectionPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameServerProtectionPolicy' }})
    instance_definitions: Optional[List[instancedefinition.InstanceDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceDefinitions' }})
    last_updated_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    status: Optional[gameservergroupstatus_enum.GameServerGroupStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusReason' }})
    suspended_actions: Optional[List[gameservergroupaction_enum.GameServerGroupActionEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuspendedActions' }})
    
