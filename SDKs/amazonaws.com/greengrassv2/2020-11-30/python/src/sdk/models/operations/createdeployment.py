from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateDeploymentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateDeploymentRequestBodyDeploymentPolicies:
    component_update_policy: Optional[shared.DeploymentComponentUpdatePolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'componentUpdatePolicy' }})
    configuration_validation_policy: Optional[shared.DeploymentConfigurationValidationPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurationValidationPolicy' }})
    failure_handling_policy: Optional[shared.DeploymentFailureHandlingPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureHandlingPolicy' }})
    

@dataclass_json
@dataclass
class CreateDeploymentRequestBodyIotJobConfiguration:
    abort_config: Optional[shared.IoTJobAbortConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abortConfig' }})
    job_executions_rollout_config: Optional[shared.IoTJobExecutionsRolloutConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobExecutionsRolloutConfig' }})
    timeout_config: Optional[shared.IoTJobTimeoutConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutConfig' }})
    

@dataclass_json
@dataclass
class CreateDeploymentRequestBody:
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    components: Optional[dict[str, shared.ComponentDeploymentSpecification]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'components' }})
    deployment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentName' }})
    deployment_policies: Optional[CreateDeploymentRequestBodyDeploymentPolicies] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentPolicies' }})
    iot_job_configuration: Optional[CreateDeploymentRequestBodyIotJobConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iotJobConfiguration' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    target_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetArn' }})
    

@dataclass
class CreateDeploymentRequest:
    headers: CreateDeploymentHeaders = field(default=None)
    request: CreateDeploymentRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDeploymentResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_deployment_response: Optional[shared.CreateDeploymentResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    request_already_in_progress_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
