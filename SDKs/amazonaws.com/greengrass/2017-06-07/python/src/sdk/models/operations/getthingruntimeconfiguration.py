from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetThingRuntimeConfigurationPathParams:
    thing_name: str = field(default=None, metadata={'path_param': { 'field_name': 'ThingName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetThingRuntimeConfigurationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetThingRuntimeConfigurationRequest:
    path_params: GetThingRuntimeConfigurationPathParams = field(default=None)
    headers: GetThingRuntimeConfigurationHeaders = field(default=None)
    

@dataclass
class GetThingRuntimeConfigurationResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_thing_runtime_configuration_response: Optional[shared.GetThingRuntimeConfigurationResponse] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
