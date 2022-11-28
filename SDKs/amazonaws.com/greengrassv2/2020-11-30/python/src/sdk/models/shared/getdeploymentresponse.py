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
class GetDeploymentResponse:
    components: Optional[dict[str, ComponentDeploymentSpecification]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('components') }})
    creation_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentId') }})
    deployment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentName') }})
    deployment_policies: Optional[DeploymentPolicies] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentPolicies') }})
    deployment_status: Optional[DeploymentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentStatus') }})
    iot_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iotJobArn') }})
    iot_job_configuration: Optional[DeploymentIoTJobConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iotJobConfiguration') }})
    iot_job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iotJobId') }})
    is_latest_for_target: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isLatestForTarget') }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    target_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetArn') }})
    
