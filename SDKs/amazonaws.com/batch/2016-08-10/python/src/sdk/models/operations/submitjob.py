from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
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
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    

@dataclass_json
@dataclass
class SubmitJobRequestBodyContainerOverrides:
    command: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    environment: Optional[List[shared.KeyValuePair]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceType' }})
    memory: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memory' }})
    resource_requirements: Optional[List[shared.ResourceRequirement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceRequirements' }})
    vcpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vcpus' }})
    

@dataclass_json
@dataclass
class SubmitJobRequestBodyNodeOverrides:
    node_property_overrides: Optional[List[shared.NodePropertyOverride]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodePropertyOverrides' }})
    num_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numNodes' }})
    

@dataclass_json
@dataclass
class SubmitJobRequestBodyRetryStrategy:
    attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attempts' }})
    evaluate_on_exit: Optional[List[shared.EvaluateOnExit]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluateOnExit' }})
    

@dataclass_json
@dataclass
class SubmitJobRequestBodyTimeout:
    attempt_duration_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attemptDurationSeconds' }})
    

@dataclass_json
@dataclass
class SubmitJobRequestBody:
    array_properties: Optional[SubmitJobRequestBodyArrayProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arrayProperties' }})
    container_overrides: Optional[SubmitJobRequestBodyContainerOverrides] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerOverrides' }})
    depends_on: Optional[List[shared.JobDependency]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dependsOn' }})
    job_definition: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobDefinition' }})
    job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobName' }})
    job_queue: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobQueue' }})
    node_overrides: Optional[SubmitJobRequestBodyNodeOverrides] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeOverrides' }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    propagate_tags: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'propagateTags' }})
    retry_strategy: Optional[SubmitJobRequestBodyRetryStrategy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retryStrategy' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    timeout: Optional[SubmitJobRequestBodyTimeout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    

@dataclass
class SubmitJobRequest:
    headers: SubmitJobHeaders = field(default=None)
    request: SubmitJobRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SubmitJobResponse:
    client_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    submit_job_response: Optional[shared.SubmitJobResponse] = field(default=None)
    
