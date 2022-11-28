from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class SubmitJobHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class SubmitJobRequestBodyArrayProperties:
    r"""SubmitJobRequestBodyArrayProperties
    An object representing an Batch array job.
    """
    
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    

@dataclass_json
@dataclass
class SubmitJobRequestBodyContainerOverrides:
    r"""SubmitJobRequestBodyContainerOverrides
    The overrides that should be sent to a container.
    """
    
    command: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    environment: Optional[List[shared.KeyValuePair]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceType') }})
    memory: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    resource_requirements: Optional[List[shared.ResourceRequirement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceRequirements') }})
    vcpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcpus') }})
    

@dataclass_json
@dataclass
class SubmitJobRequestBodyNodeOverrides:
    r"""SubmitJobRequestBodyNodeOverrides
    <p>Object representing any node overrides to a job definition that's used in a <a>SubmitJob</a> API operation.</p> <note> <p>This isn't applicable to jobs that are running on Fargate resources and shouldn't be provided; use <code>containerOverrides</code> instead.</p> </note>
    """
    
    node_property_overrides: Optional[List[shared.NodePropertyOverride]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodePropertyOverrides') }})
    num_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numNodes') }})
    

@dataclass_json
@dataclass
class SubmitJobRequestBodyRetryStrategy:
    r"""SubmitJobRequestBodyRetryStrategy
    The retry strategy associated with a job. For more information, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html\">Automated job retries</a> in the <i>Batch User Guide</i>.
    """
    
    attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attempts') }})
    evaluate_on_exit: Optional[List[shared.EvaluateOnExit]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluateOnExit') }})
    

@dataclass_json
@dataclass
class SubmitJobRequestBodyTimeout:
    r"""SubmitJobRequestBodyTimeout
    An object representing a job timeout configuration.
    """
    
    attempt_duration_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attemptDurationSeconds') }})
    

@dataclass_json
@dataclass
class SubmitJobRequestBody:
    job_definition: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobDefinition') }})
    job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobName') }})
    job_queue: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobQueue') }})
    array_properties: Optional[SubmitJobRequestBodyArrayProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arrayProperties') }})
    container_overrides: Optional[SubmitJobRequestBodyContainerOverrides] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerOverrides') }})
    depends_on: Optional[List[shared.JobDependency]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependsOn') }})
    node_overrides: Optional[SubmitJobRequestBodyNodeOverrides] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeOverrides') }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    propagate_tags: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propagateTags') }})
    retry_strategy: Optional[SubmitJobRequestBodyRetryStrategy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryStrategy') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    timeout: Optional[SubmitJobRequestBodyTimeout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    

@dataclass
class SubmitJobRequest:
    headers: SubmitJobHeaders = field()
    request: SubmitJobRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SubmitJobResponse:
    content_type: str = field()
    status_code: int = field()
    client_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    submit_job_response: Optional[shared.SubmitJobResponse] = field(default=None)
    
