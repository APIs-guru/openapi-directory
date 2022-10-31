from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateAuthorizerPathParams:
    authorizer_name: str = field(default=None, metadata={'path_param': { 'field_name': 'authorizerName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAuthorizerHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateAuthorizerRequestBodyStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"


@dataclass_json
@dataclass
class UpdateAuthorizerRequestBody:
    authorizer_function_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizerFunctionArn' }})
    status: Optional[UpdateAuthorizerRequestBodyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    token_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenKeyName' }})
    token_signing_public_keys: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenSigningPublicKeys' }})
    

@dataclass
class UpdateAuthorizerRequest:
    path_params: UpdateAuthorizerPathParams = field(default=None)
    headers: UpdateAuthorizerHeaders = field(default=None)
    request: UpdateAuthorizerRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateAuthorizerResponse:
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    update_authorizer_response: Optional[shared.UpdateAuthorizerResponse] = field(default=None)
    
