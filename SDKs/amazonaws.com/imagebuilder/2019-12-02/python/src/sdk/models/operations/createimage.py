from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateImageHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateImageRequestBodyImageTestsConfiguration:
    image_tests_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageTestsEnabled' }})
    timeout_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutMinutes' }})
    

@dataclass_json
@dataclass
class CreateImageRequestBody:
    client_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    container_recipe_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerRecipeArn' }})
    distribution_configuration_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributionConfigurationArn' }})
    enhanced_image_metadata_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enhancedImageMetadataEnabled' }})
    image_recipe_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageRecipeArn' }})
    image_tests_configuration: Optional[CreateImageRequestBodyImageTestsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageTestsConfiguration' }})
    infrastructure_configuration_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'infrastructureConfigurationArn' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateImageRequest:
    headers: CreateImageHeaders = field(default=None)
    request: CreateImageRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateImageResponse:
    call_rate_limit_exceeded_exception: Optional[Any] = field(default=None)
    client_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_image_response: Optional[shared.CreateImageResponse] = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    idempotent_parameter_mismatch_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
