from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateGatewayHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateGatewayRequestBodyGatewayPlatform:
    greengrass: Optional[shared.Greengrass] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'greengrass' }})
    greengrass_v2: Optional[shared.GreengrassV2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'greengrassV2' }})
    

@dataclass_json
@dataclass
class CreateGatewayRequestBody:
    gateway_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gatewayName' }})
    gateway_platform: CreateGatewayRequestBodyGatewayPlatform = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gatewayPlatform' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateGatewayRequest:
    headers: CreateGatewayHeaders = field(default=None)
    request: CreateGatewayRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateGatewayResponse:
    content_type: str = field(default=None)
    create_gateway_response: Optional[shared.CreateGatewayResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
