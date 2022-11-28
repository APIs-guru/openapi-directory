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
class DeploymentInfo:
    r"""DeploymentInfo
    Information about a deployment.
    """
    
    additional_deployment_status_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalDeploymentStatusInfo') }})
    application_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationName') }})
    auto_rollback_configuration: Optional[AutoRollbackConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoRollbackConfiguration') }})
    blue_green_deployment_configuration: Optional[BlueGreenDeploymentConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blueGreenDeploymentConfiguration') }})
    complete_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completeTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    compute_platform: Optional[ComputePlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computePlatform') }})
    create_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creator: Optional[DeploymentCreatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    deployment_config_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentConfigName') }})
    deployment_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentGroupName') }})
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentId') }})
    deployment_overview: Optional[DeploymentOverview] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentOverview') }})
    deployment_status_messages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentStatusMessages') }})
    deployment_style: Optional[DeploymentStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentStyle') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    error_information: Optional[ErrorInformation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorInformation') }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalId') }})
    file_exists_behavior: Optional[FileExistsBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileExistsBehavior') }})
    ignore_application_stop_failures: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreApplicationStopFailures') }})
    instance_termination_wait_time_started: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceTerminationWaitTimeStarted') }})
    load_balancer_info: Optional[LoadBalancerInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadBalancerInfo') }})
    previous_revision: Optional[RevisionLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previousRevision') }})
    related_deployments: Optional[RelatedDeployments] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedDeployments') }})
    revision: Optional[RevisionLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    rollback_info: Optional[RollbackInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rollbackInfo') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[DeploymentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    target_instances: Optional[TargetInstances] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetInstances') }})
    update_outdated_instances_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateOutdatedInstancesOnly') }})
    
