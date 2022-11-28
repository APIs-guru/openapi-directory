from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateServiceRequest:
    service: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    capacity_provider_strategy: Optional[List[CapacityProviderStrategyItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacityProviderStrategy') }})
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    deployment_configuration: Optional[DeploymentConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentConfiguration') }})
    desired_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredCount') }})
    enable_execute_command: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableExecuteCommand') }})
    force_new_deployment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forceNewDeployment') }})
    health_check_grace_period_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthCheckGracePeriodSeconds') }})
    network_configuration: Optional[NetworkConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfiguration') }})
    placement_constraints: Optional[List[PlacementConstraint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementConstraints') }})
    placement_strategy: Optional[List[PlacementStrategy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementStrategy') }})
    platform_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformVersion') }})
    task_definition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskDefinition') }})
    
