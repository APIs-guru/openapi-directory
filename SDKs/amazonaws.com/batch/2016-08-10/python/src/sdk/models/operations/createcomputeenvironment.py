from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateComputeEnvironmentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateComputeEnvironmentRequestBodyComputeResources:
    r"""CreateComputeEnvironmentRequestBodyComputeResources
    An object representing an Batch compute resource. For more information, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html\">Compute Environments</a> in the <i>Batch User Guide</i>.
    """
    
    allocation_strategy: Optional[shared.CrAllocationStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allocationStrategy') }})
    bid_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bidPercentage') }})
    desiredv_cpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredvCpus') }})
    ec2_configuration: Optional[List[shared.Ec2Configuration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ec2Configuration') }})
    ec2_key_pair: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ec2KeyPair') }})
    image_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageId') }})
    instance_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceRole') }})
    instance_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceTypes') }})
    launch_template: Optional[shared.LaunchTemplateSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchTemplate') }})
    maxv_cpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxvCpus') }})
    minv_cpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minvCpus') }})
    placement_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementGroup') }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityGroupIds') }})
    spot_iam_fleet_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spotIamFleetRole') }})
    subnets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnets') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    type: Optional[shared.CrTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class CreateComputeEnvironmentRequestBodyStateEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

class CreateComputeEnvironmentRequestBodyTypeEnum(str, Enum):
    MANAGED = "MANAGED"
    UNMANAGED = "UNMANAGED"


@dataclass_json
@dataclass
class CreateComputeEnvironmentRequestBody:
    compute_environment_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeEnvironmentName') }})
    type: CreateComputeEnvironmentRequestBodyTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    compute_resources: Optional[CreateComputeEnvironmentRequestBodyComputeResources] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeResources') }})
    service_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceRole') }})
    state: Optional[CreateComputeEnvironmentRequestBodyStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class CreateComputeEnvironmentRequest:
    headers: CreateComputeEnvironmentHeaders = field()
    request: CreateComputeEnvironmentRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateComputeEnvironmentResponse:
    content_type: str = field()
    status_code: int = field()
    client_exception: Optional[Any] = field(default=None)
    create_compute_environment_response: Optional[shared.CreateComputeEnvironmentResponse] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    
