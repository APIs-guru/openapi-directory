from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateAPIHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateAPIRequestBodyCorsConfiguration:
    r"""CreateAPIRequestBodyCorsConfiguration
    Represents a CORS configuration. Supported only for HTTP APIs. See <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html\">Configuring CORS</a> for more information.
    """
    
    allow_credentials: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowCredentials') }})
    allow_headers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowHeaders') }})
    allow_methods: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowMethods') }})
    allow_origins: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowOrigins') }})
    expose_headers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExposeHeaders') }})
    max_age: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxAge') }})
    
class CreateAPIRequestBodyProtocolTypeEnum(str, Enum):
    WEBSOCKET = "WEBSOCKET"
    HTTP = "HTTP"


@dataclass_json
@dataclass
class CreateAPIRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protocol_type: CreateAPIRequestBodyProtocolTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocolType') }})
    api_key_selection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKeySelectionExpression') }})
    cors_configuration: Optional[CreateAPIRequestBodyCorsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('corsConfiguration') }})
    credentials_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentialsArn') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disable_execute_api_endpoint: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableExecuteApiEndpoint') }})
    disable_schema_validation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableSchemaValidation') }})
    route_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routeKey') }})
    route_selection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routeSelectionExpression') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass
class CreateAPIRequest:
    headers: CreateAPIHeaders = field()
    request: CreateAPIRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAPIResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    create_api_response: Optional[shared.CreateAPIResponse] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
