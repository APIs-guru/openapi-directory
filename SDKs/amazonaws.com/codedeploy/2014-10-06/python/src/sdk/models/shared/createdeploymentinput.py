from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateDeploymentInput:
    r"""CreateDeploymentInput
    Represents the input of a <code>CreateDeployment</code> operation.
    """
    
    application_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationName') }})
    auto_rollback_configuration: Optional[AutoRollbackConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoRollbackConfiguration') }})
    deployment_config_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentConfigName') }})
    deployment_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentGroupName') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    file_exists_behavior: Optional[FileExistsBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileExistsBehavior') }})
    ignore_application_stop_failures: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreApplicationStopFailures') }})
    revision: Optional[RevisionLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    target_instances: Optional[TargetInstances] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetInstances') }})
    update_outdated_instances_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateOutdatedInstancesOnly') }})
    
