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
class CreateDeploymentGroupInput:
    r"""CreateDeploymentGroupInput
    Represents the input of a <code>CreateDeploymentGroup</code> operation.
    """
    
    application_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationName') }})
    deployment_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentGroupName') }})
    service_role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceRoleArn') }})
    alarm_configuration: Optional[AlarmConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmConfiguration') }})
    auto_rollback_configuration: Optional[AutoRollbackConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoRollbackConfiguration') }})
    auto_scaling_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoScalingGroups') }})
    blue_green_deployment_configuration: Optional[BlueGreenDeploymentConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blueGreenDeploymentConfiguration') }})
    deployment_config_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentConfigName') }})
    deployment_style: Optional[DeploymentStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentStyle') }})
    ec2_tag_filters: Optional[List[Ec2TagFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ec2TagFilters') }})
    ec2_tag_set: Optional[Ec2TagSet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ec2TagSet') }})
    ecs_services: Optional[List[EcsService]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ecsServices') }})
    load_balancer_info: Optional[LoadBalancerInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadBalancerInfo') }})
    on_premises_instance_tag_filters: Optional[List[TagFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onPremisesInstanceTagFilters') }})
    on_premises_tag_set: Optional[OnPremisesTagSet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onPremisesTagSet') }})
    outdated_instances_strategy: Optional[OutdatedInstancesStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outdatedInstancesStrategy') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    trigger_configurations: Optional[List[TriggerConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerConfigurations') }})
    
