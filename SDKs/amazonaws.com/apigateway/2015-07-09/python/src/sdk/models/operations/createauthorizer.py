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
class CreateAuthorizerPathParams:
    restapi_id: str = field(metadata={'path_param': { 'field_name': 'restapi_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAuthorizerHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class CreateAuthorizerRequestBodyTypeEnum(str, Enum):
    TOKEN = "TOKEN"
    REQUEST = "REQUEST"
    COGNITO_USER_POOLS = "COGNITO_USER_POOLS"


@dataclass_json
@dataclass
class CreateAuthorizerRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: CreateAuthorizerRequestBodyTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    auth_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authType') }})
    authorizer_credentials: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizerCredentials') }})
    authorizer_result_ttl_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizerResultTtlInSeconds') }})
    authorizer_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizerUri') }})
    identity_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identitySource') }})
    identity_validation_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityValidationExpression') }})
    provider_ar_ns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerARNs') }})
    

@dataclass
class CreateAuthorizerRequest:
    headers: CreateAuthorizerHeaders = field()
    path_params: CreateAuthorizerPathParams = field()
    request: CreateAuthorizerRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAuthorizerResponse:
    content_type: str = field()
    status_code: int = field()
    authorizer: Optional[shared.Authorizer] = field(default=None)
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
