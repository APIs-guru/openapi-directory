from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import componentdeploymentspecification
from . import deploymentpolicies
from . import deploymentstatus_enum
from . import deploymentiotjobconfiguration


@dataclass_json
@dataclass
class GetDeploymentResponse:
    components: Optional[dict[str, componentdeploymentspecification.ComponentDeploymentSpecification]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'components' }})
    creation_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentId' }})
    deployment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentName' }})
    deployment_policies: Optional[deploymentpolicies.DeploymentPolicies] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentPolicies' }})
    deployment_status: Optional[deploymentstatus_enum.DeploymentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentStatus' }})
    iot_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iotJobArn' }})
    iot_job_configuration: Optional[deploymentiotjobconfiguration.DeploymentIoTJobConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iotJobConfiguration' }})
    iot_job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iotJobId' }})
    is_latest_for_target: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isLatestForTarget' }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionId' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    target_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetArn' }})
    
