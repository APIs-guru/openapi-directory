from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateGatewayCapabilityConfigurationPathParams:
    gateway_id: str = field(metadata={'path_param': { 'field_name': 'gatewayId', 'style': 'simple', 'explode': False }})
    

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
    capability_configuration: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('capabilityConfiguration') }})
    capability_namespace: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('capabilityNamespace') }})
    

@dataclass
class UpdateGatewayCapabilityConfigurationRequest:
    headers: UpdateGatewayCapabilityConfigurationHeaders = field()
    path_params: UpdateGatewayCapabilityConfigurationPathParams = field()
    request: UpdateGatewayCapabilityConfigurationRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateGatewayCapabilityConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    conflicting_operation_exception: Optional[Any] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_gateway_capability_configuration_response: Optional[shared.UpdateGatewayCapabilityConfigurationResponse] = field(default=None)
    
