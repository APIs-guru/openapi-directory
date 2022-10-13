from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import alarmconfiguration
from . import autorollbackconfiguration
from . import bluegreendeploymentconfiguration
from . import deploymentstyle
from . import ec2tagfilter
from . import ec2tagset
from . import ecsservice
from . import loadbalancerinfo
from . import tagfilter
from . import onpremisestagset
from . import outdatedinstancesstrategy_enum
from . import triggerconfig


@dataclass_json
@dataclass
class UpdateDeploymentGroupInput:
    alarm_configuration: Optional[alarmconfiguration.AlarmConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmConfiguration' }})
    application_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationName' }})
    auto_rollback_configuration: Optional[autorollbackconfiguration.AutoRollbackConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoRollbackConfiguration' }})
    auto_scaling_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoScalingGroups' }})
    blue_green_deployment_configuration: Optional[bluegreendeploymentconfiguration.BlueGreenDeploymentConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blueGreenDeploymentConfiguration' }})
    current_deployment_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentDeploymentGroupName' }})
    deployment_config_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentConfigName' }})
    deployment_style: Optional[deploymentstyle.DeploymentStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentStyle' }})
    ec2_tag_filters: Optional[List[ec2tagfilter.Ec2TagFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ec2TagFilters' }})
    ec2_tag_set: Optional[ec2tagset.Ec2TagSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ec2TagSet' }})
    ecs_services: Optional[List[ecsservice.EcsService]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ecsServices' }})
    load_balancer_info: Optional[loadbalancerinfo.LoadBalancerInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loadBalancerInfo' }})
    new_deployment_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newDeploymentGroupName' }})
    on_premises_instance_tag_filters: Optional[List[tagfilter.TagFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onPremisesInstanceTagFilters' }})
    on_premises_tag_set: Optional[onpremisestagset.OnPremisesTagSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onPremisesTagSet' }})
    outdated_instances_strategy: Optional[outdatedinstancesstrategy_enum.OutdatedInstancesStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outdatedInstancesStrategy' }})
    service_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceRoleArn' }})
    trigger_configurations: Optional[List[triggerconfig.TriggerConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerConfigurations' }})
    
