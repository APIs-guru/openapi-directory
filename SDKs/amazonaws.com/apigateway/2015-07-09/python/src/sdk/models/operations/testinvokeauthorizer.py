from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class TestInvokeAuthorizerPathParams:
    authorizer_id: str = field(metadata={'path_param': { 'field_name': 'authorizer_id', 'style': 'simple', 'explode': False }})
    restapi_id: str = field(metadata={'path_param': { 'field_name': 'restapi_id', 'style': 'simple', 'explode': False }})
    

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
class TestInvokeAuthorizerRequestBody:
    additional_context: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalContext') }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    headers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    multi_value_headers: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multiValueHeaders') }})
    path_with_query_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pathWithQueryString') }})
    stage_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stageVariables') }})
    

@dataclass
class TestInvokeAuthorizerRequest:
    headers: TestInvokeAuthorizerHeaders = field()
    path_params: TestInvokeAuthorizerPathParams = field()
    request: TestInvokeAuthorizerRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TestInvokeAuthorizerResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    test_invoke_authorizer_response: Optional[shared.TestInvokeAuthorizerResponse] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
