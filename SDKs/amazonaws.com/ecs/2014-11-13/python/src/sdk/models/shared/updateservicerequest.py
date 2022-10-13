from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import capacityproviderstrategyitem
from . import deploymentconfiguration
from . import networkconfiguration
from . import placementconstraint
from . import placementstrategy


@dataclass_json
@dataclass
class UpdateServiceRequest:
    capacity_provider_strategy: Optional[List[capacityproviderstrategyitem.CapacityProviderStrategyItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacityProviderStrategy' }})
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    deployment_configuration: Optional[deploymentconfiguration.DeploymentConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentConfiguration' }})
    desired_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredCount' }})
    enable_execute_command: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableExecuteCommand' }})
    force_new_deployment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forceNewDeployment' }})
    health_check_grace_period_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthCheckGracePeriodSeconds' }})
    network_configuration: Optional[networkconfiguration.NetworkConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkConfiguration' }})
    placement_constraints: Optional[List[placementconstraint.PlacementConstraint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placementConstraints' }})
    placement_strategy: Optional[List[placementstrategy.PlacementStrategy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placementStrategy' }})
    platform_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platformVersion' }})
    service: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service' }})
    task_definition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskDefinition' }})
    
