from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateAuthorizerPathParams:
    api_id: str = field(default=None, metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAuthorizerHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class CreateAuthorizerRequestBodyAuthorizerTypeEnum(str, Enum):
    REQUEST = "REQUEST"
    JWT = "JWT"


@dataclass_json
@dataclass
class CreateAuthorizerRequestBodyJwtConfiguration:
    audience: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Audience' }})
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Issuer' }})
    

@dataclass_json
@dataclass
class CreateAuthorizerRequestBody:
    authorizer_credentials_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizerCredentialsArn' }})
    authorizer_payload_format_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizerPayloadFormatVersion' }})
    authorizer_result_ttl_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizerResultTtlInSeconds' }})
    authorizer_type: CreateAuthorizerRequestBodyAuthorizerTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizerType' }})
    authorizer_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizerUri' }})
    enable_simple_responses: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableSimpleResponses' }})
    identity_source: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identitySource' }})
    identity_validation_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identityValidationExpression' }})
    jwt_configuration: Optional[CreateAuthorizerRequestBodyJwtConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jwtConfiguration' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class CreateAuthorizerRequest:
    path_params: CreateAuthorizerPathParams = field(default=None)
    headers: CreateAuthorizerHeaders = field(default=None)
    request: CreateAuthorizerRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAuthorizerResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_authorizer_response: Optional[shared.CreateAuthorizerResponse] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
