from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import autorollbackconfiguration
from . import fileexistsbehavior_enum
from . import revisionlocation
from . import targetinstances


@dataclass_json
@dataclass
class CreateDeploymentInput:
    application_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationName' }})
    auto_rollback_configuration: Optional[autorollbackconfiguration.AutoRollbackConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoRollbackConfiguration' }})
    deployment_config_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentConfigName' }})
    deployment_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentGroupName' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    file_exists_behavior: Optional[fileexistsbehavior_enum.FileExistsBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileExistsBehavior' }})
    ignore_application_stop_failures: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ignoreApplicationStopFailures' }})
    revision: Optional[revisionlocation.RevisionLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision' }})
    target_instances: Optional[targetinstances.TargetInstances] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetInstances' }})
    update_outdated_instances_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateOutdatedInstancesOnly' }})
    
