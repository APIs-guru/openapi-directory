from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateImagePipelineHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateImagePipelineRequestBodyImageTestsConfiguration:
    image_tests_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageTestsEnabled' }})
    timeout_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutMinutes' }})
    

@dataclass_json
@dataclass
class CreateImagePipelineRequestBodySchedule:
    pipeline_execution_start_condition: Optional[shared.PipelineExecutionStartConditionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineExecutionStartCondition' }})
    schedule_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleExpression' }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    
class CreateImagePipelineRequestBodyStatusEnum(str, Enum):
    DISABLED = "DISABLED"
    ENABLED = "ENABLED"


@dataclass_json
@dataclass
class CreateImagePipelineRequestBody:
    client_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    container_recipe_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerRecipeArn' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    distribution_configuration_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributionConfigurationArn' }})
    enhanced_image_metadata_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enhancedImageMetadataEnabled' }})
    image_recipe_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageRecipeArn' }})
    image_tests_configuration: Optional[CreateImagePipelineRequestBodyImageTestsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageTestsConfiguration' }})
    infrastructure_configuration_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'infrastructureConfigurationArn' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    schedule: Optional[CreateImagePipelineRequestBodySchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule' }})
    status: Optional[CreateImagePipelineRequestBodyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateImagePipelineRequest:
    headers: CreateImagePipelineHeaders = field(default=None)
    request: CreateImagePipelineRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateImagePipelineResponse:
    call_rate_limit_exceeded_exception: Optional[Any] = field(default=None)
    client_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_image_pipeline_response: Optional[shared.CreateImagePipelineResponse] = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    idempotent_parameter_mismatch_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
