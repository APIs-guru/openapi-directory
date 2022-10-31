from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateAuthorizerPathParams:
    api_id: str = field(default=None, metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    authorizer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'authorizerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAuthorizerHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateAuthorizerRequestBodyAuthorizerTypeEnum(str, Enum):
    REQUEST = "REQUEST"
    JWT = "JWT"


@dataclass_json
@dataclass
class UpdateAuthorizerRequestBodyJwtConfiguration:
    audience: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Audience' }})
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Issuer' }})
    

@dataclass_json
@dataclass
class UpdateAuthorizerRequestBody:
    authorizer_credentials_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizerCredentialsArn' }})
    authorizer_payload_format_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizerPayloadFormatVersion' }})
    authorizer_result_ttl_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizerResultTtlInSeconds' }})
    authorizer_type: Optional[UpdateAuthorizerRequestBodyAuthorizerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizerType' }})
    authorizer_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizerUri' }})
    enable_simple_responses: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableSimpleResponses' }})
    identity_source: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identitySource' }})
    identity_validation_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identityValidationExpression' }})
    jwt_configuration: Optional[UpdateAuthorizerRequestBodyJwtConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jwtConfiguration' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class UpdateAuthorizerRequest:
    path_params: UpdateAuthorizerPathParams = field(default=None)
    headers: UpdateAuthorizerHeaders = field(default=None)
    request: UpdateAuthorizerRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateAuthorizerResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    update_authorizer_response: Optional[shared.UpdateAuthorizerResponse] = field(default=None)
    
