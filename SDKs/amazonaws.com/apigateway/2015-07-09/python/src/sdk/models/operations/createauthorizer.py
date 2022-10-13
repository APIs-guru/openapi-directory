from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateAuthorizerPathParams:
    restapi_id: str = field(default=None, metadata={'path_param': { 'field_name': 'restapi_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAuthorizerHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class CreateAuthorizerRequestBodyTypeEnum(str, Enum):
    TOKEN = "TOKEN"
    REQUEST = "REQUEST"
    COGNITO_USER_POOLS = "COGNITO_USER_POOLS"


@dataclass_json
@dataclass
class CreateAuthorizerRequestBody:
    auth_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authType' }})
    authorizer_credentials: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizerCredentials' }})
    authorizer_result_ttl_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizerResultTtlInSeconds' }})
    authorizer_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizerUri' }})
    identity_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identitySource' }})
    identity_validation_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identityValidationExpression' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    provider_ar_ns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'providerARNs' }})
    type: CreateAuthorizerRequestBodyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class CreateAuthorizerRequest:
    path_params: CreateAuthorizerPathParams = field(default=None)
    headers: CreateAuthorizerHeaders = field(default=None)
    request: CreateAuthorizerRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAuthorizerResponse:
    authorizer: Optional[shared.Authorizer] = field(default=None)
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
