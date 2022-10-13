from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateThingRuntimeConfigurationPathParams:
    thing_name: str = field(default=None, metadata={'path_param': { 'field_name': 'ThingName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateThingRuntimeConfigurationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration:
    telemetry: Optional[shared.TelemetryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Telemetry' }})
    

@dataclass_json
@dataclass
class UpdateThingRuntimeConfigurationRequestBody:
    telemetry_configuration: Optional[UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TelemetryConfiguration' }})
    

@dataclass
class UpdateThingRuntimeConfigurationRequest:
    path_params: UpdateThingRuntimeConfigurationPathParams = field(default=None)
    headers: UpdateThingRuntimeConfigurationHeaders = field(default=None)
    request: UpdateThingRuntimeConfigurationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateThingRuntimeConfigurationResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_thing_runtime_configuration_response: Optional[dict[str, Any]] = field(default=None)
    
