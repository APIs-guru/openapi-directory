from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateGatewayCapabilityConfigurationPathParams:
    gateway_id: str = field(default=None, metadata={'path_param': { 'field_name': 'gatewayId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateGatewayCapabilityConfigurationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateGatewayCapabilityConfigurationRequestBody:
    capability_configuration: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capabilityConfiguration' }})
    capability_namespace: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capabilityNamespace' }})
    

@dataclass
class UpdateGatewayCapabilityConfigurationRequest:
    path_params: UpdateGatewayCapabilityConfigurationPathParams = field(default=None)
    headers: UpdateGatewayCapabilityConfigurationHeaders = field(default=None)
    request: UpdateGatewayCapabilityConfigurationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateGatewayCapabilityConfigurationResponse:
    conflicting_operation_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_gateway_capability_configuration_response: Optional[shared.UpdateGatewayCapabilityConfigurationResponse] = field(default=None)
    
