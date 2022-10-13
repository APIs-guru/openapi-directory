from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateAPIPathParams:
    api_id: str = field(default=None, metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAPIHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateAPIRequestBodyCorsConfiguration:
    allow_credentials: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowCredentials' }})
    allow_headers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowHeaders' }})
    allow_methods: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowMethods' }})
    allow_origins: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowOrigins' }})
    expose_headers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExposeHeaders' }})
    max_age: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxAge' }})
    

@dataclass_json
@dataclass
class UpdateAPIRequestBody:
    api_key_selection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKeySelectionExpression' }})
    cors_configuration: Optional[UpdateAPIRequestBodyCorsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'corsConfiguration' }})
    credentials_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credentialsArn' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disable_execute_api_endpoint: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableExecuteApiEndpoint' }})
    disable_schema_validation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableSchemaValidation' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    route_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routeKey' }})
    route_selection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routeSelectionExpression' }})
    target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

@dataclass
class UpdateAPIRequest:
    path_params: UpdateAPIPathParams = field(default=None)
    headers: UpdateAPIHeaders = field(default=None)
    request: UpdateAPIRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateAPIResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    update_api_response: Optional[shared.UpdateAPIResponse] = field(default=None)
    
