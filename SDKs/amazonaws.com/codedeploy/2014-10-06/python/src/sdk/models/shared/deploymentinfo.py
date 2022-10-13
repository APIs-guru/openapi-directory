from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import autorollbackconfiguration
from . import bluegreendeploymentconfiguration
from . import computeplatform_enum
from . import deploymentcreator_enum
from . import deploymentoverview
from . import deploymentstyle
from . import errorinformation
from . import fileexistsbehavior_enum
from . import loadbalancerinfo
from . import revisionlocation
from . import relateddeployments
from . import revisionlocation
from . import rollbackinfo
from . import deploymentstatus_enum
from . import targetinstances


@dataclass_json
@dataclass
class DeploymentInfo:
    additional_deployment_status_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalDeploymentStatusInfo' }})
    application_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationName' }})
    auto_rollback_configuration: Optional[autorollbackconfiguration.AutoRollbackConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoRollbackConfiguration' }})
    blue_green_deployment_configuration: Optional[bluegreendeploymentconfiguration.BlueGreenDeploymentConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blueGreenDeploymentConfiguration' }})
    complete_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completeTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    compute_platform: Optional[computeplatform_enum.ComputePlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computePlatform' }})
    create_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creator: Optional[deploymentcreator_enum.DeploymentCreatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creator' }})
    deployment_config_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentConfigName' }})
    deployment_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentGroupName' }})
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentId' }})
    deployment_overview: Optional[deploymentoverview.DeploymentOverview] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentOverview' }})
    deployment_status_messages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentStatusMessages' }})
    deployment_style: Optional[deploymentstyle.DeploymentStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentStyle' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    error_information: Optional[errorinformation.ErrorInformation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorInformation' }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalId' }})
    file_exists_behavior: Optional[fileexistsbehavior_enum.FileExistsBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileExistsBehavior' }})
    ignore_application_stop_failures: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ignoreApplicationStopFailures' }})
    instance_termination_wait_time_started: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceTerminationWaitTimeStarted' }})
    load_balancer_info: Optional[loadbalancerinfo.LoadBalancerInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loadBalancerInfo' }})
    previous_revision: Optional[revisionlocation.RevisionLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previousRevision' }})
    related_deployments: Optional[relateddeployments.RelatedDeployments] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relatedDeployments' }})
    revision: Optional[revisionlocation.RevisionLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision' }})
    rollback_info: Optional[rollbackinfo.RollbackInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rollbackInfo' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[deploymentstatus_enum.DeploymentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    target_instances: Optional[targetinstances.TargetInstances] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetInstances' }})
    update_outdated_instances_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateOutdatedInstancesOnly' }})
    
