from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateAutoScalingConfigurationXAmzTargetEnum(str, Enum):
    APP_RUNNER_CREATE_AUTO_SCALING_CONFIGURATION = "AppRunner.CreateAutoScalingConfiguration"


@dataclass
class CreateAutoScalingConfigurationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CreateAutoScalingConfigurationXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CreateAutoScalingConfigurationRequest:
    headers: CreateAutoScalingConfigurationHeaders = field(default=None)
    request: shared.CreateAutoScalingConfigurationRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAutoScalingConfigurationResponse:
    content_type: str = field(default=None)
    create_auto_scaling_configuration_response: Optional[shared.CreateAutoScalingConfigurationResponse] = field(default=None)
    internal_service_error_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
