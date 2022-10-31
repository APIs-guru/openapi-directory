from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateAuthorizerPathParams:
    authorizer_name: str = field(default=None, metadata={'path_param': { 'field_name': 'authorizerName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAuthorizerHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class CreateAuthorizerRequestBodyStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"


@dataclass_json
@dataclass
class CreateAuthorizerRequestBody:
    authorizer_function_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizerFunctionArn' }})
    signing_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signingDisabled' }})
    status: Optional[CreateAuthorizerRequestBodyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    token_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenKeyName' }})
    token_signing_public_keys: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenSigningPublicKeys' }})
    

@dataclass
class CreateAuthorizerRequest:
    path_params: CreateAuthorizerPathParams = field(default=None)
    headers: CreateAuthorizerHeaders = field(default=None)
    request: CreateAuthorizerRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAuthorizerResponse:
    content_type: str = field(default=None)
    create_authorizer_response: Optional[shared.CreateAuthorizerResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
