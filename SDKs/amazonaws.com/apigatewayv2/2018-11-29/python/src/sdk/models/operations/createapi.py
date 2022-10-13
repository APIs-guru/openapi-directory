from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateAPIHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateAPIRequestBodyCorsConfiguration:
    allow_credentials: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowCredentials' }})
    allow_headers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowHeaders' }})
    allow_methods: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowMethods' }})
    allow_origins: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowOrigins' }})
    expose_headers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExposeHeaders' }})
    max_age: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxAge' }})
    
class CreateAPIRequestBodyProtocolTypeEnum(str, Enum):
    WEBSOCKET = "WEBSOCKET"
    HTTP = "HTTP"


@dataclass_json
@dataclass
class CreateAPIRequestBody:
    api_key_selection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKeySelectionExpression' }})
    cors_configuration: Optional[CreateAPIRequestBodyCorsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'corsConfiguration' }})
    credentials_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credentialsArn' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disable_execute_api_endpoint: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableExecuteApiEndpoint' }})
    disable_schema_validation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableSchemaValidation' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    protocol_type: CreateAPIRequestBodyProtocolTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocolType' }})
    route_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routeKey' }})
    route_selection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routeSelectionExpression' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

@dataclass
class CreateAPIRequest:
    headers: CreateAPIHeaders = field(default=None)
    request: CreateAPIRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAPIResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_api_response: Optional[shared.CreateAPIResponse] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
