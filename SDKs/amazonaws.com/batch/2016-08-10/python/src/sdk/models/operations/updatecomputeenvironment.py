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
class UpdateComputeEnvironmentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateComputeEnvironmentRequestBodyComputeResources:
    r"""UpdateComputeEnvironmentRequestBodyComputeResources
    An object representing the attributes of a compute environment that can be updated. For more information, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html\">Compute Environments</a> in the <i>Batch User Guide</i>.
    """
    
    desiredv_cpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredvCpus') }})
    maxv_cpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxvCpus') }})
    minv_cpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minvCpus') }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityGroupIds') }})
    subnets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnets') }})
    
class UpdateComputeEnvironmentRequestBodyStateEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"


@dataclass_json
@dataclass
class UpdateComputeEnvironmentRequestBody:
    compute_environment: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeEnvironment') }})
    compute_resources: Optional[UpdateComputeEnvironmentRequestBodyComputeResources] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeResources') }})
    service_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceRole') }})
    state: Optional[UpdateComputeEnvironmentRequestBodyStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass
class UpdateComputeEnvironmentRequest:
    headers: UpdateComputeEnvironmentHeaders = field()
    request: UpdateComputeEnvironmentRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateComputeEnvironmentResponse:
    content_type: str = field()
    status_code: int = field()
    client_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    update_compute_environment_response: Optional[shared.UpdateComputeEnvironmentResponse] = field(default=None)
    
