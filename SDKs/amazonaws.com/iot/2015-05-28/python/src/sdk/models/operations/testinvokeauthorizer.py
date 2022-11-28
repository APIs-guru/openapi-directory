from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class TestInvokeAuthorizerPathParams:
    authorizer_name: str = field(metadata={'path_param': { 'field_name': 'authorizerName', 'style': 'simple', 'explode': False }})
    

@dataclass
class TestInvokeAuthorizerHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class TestInvokeAuthorizerRequestBodyHTTPContext:
    r"""TestInvokeAuthorizerRequestBodyHTTPContext
    Specifies the HTTP context to use for the test authorizer request.
    """
    
    headers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    query_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryString') }})
    

@dataclass_json
@dataclass
class TestInvokeAuthorizerRequestBodyMqttContext:
    r"""TestInvokeAuthorizerRequestBodyMqttContext
    Specifies the MQTT context to use for the test authorizer request
    """
    
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclass
class TestInvokeAuthorizerRequestBodyTLSContext:
    r"""TestInvokeAuthorizerRequestBodyTLSContext
    Specifies the TLS context to use for the test authorizer request.
    """
    
    server_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverName') }})
    

@dataclass_json
@dataclass
class TestInvokeAuthorizerRequestBody:
    http_context: Optional[TestInvokeAuthorizerRequestBodyHTTPContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpContext') }})
    mqtt_context: Optional[TestInvokeAuthorizerRequestBodyMqttContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mqttContext') }})
    tls_context: Optional[TestInvokeAuthorizerRequestBodyTLSContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tlsContext') }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    token_signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenSignature') }})
    

@dataclass
class TestInvokeAuthorizerRequest:
    headers: TestInvokeAuthorizerHeaders = field()
    path_params: TestInvokeAuthorizerPathParams = field()
    request: TestInvokeAuthorizerRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TestInvokeAuthorizerResponse:
    content_type: str = field()
    status_code: int = field()
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    invalid_response_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    test_invoke_authorizer_response: Optional[shared.TestInvokeAuthorizerResponse] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
