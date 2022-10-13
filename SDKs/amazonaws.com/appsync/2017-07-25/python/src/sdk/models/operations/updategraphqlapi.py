from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateGraphqlAPIPathParams:
    api_id: str = field(default=None, metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateGraphqlAPIHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class UpdateGraphqlAPIRequestBodyAuthenticationTypeEnum(str, Enum):
    API_KEY = "API_KEY"
    AWS_IAM = "AWS_IAM"
    AMAZON_COGNITO_USER_POOLS = "AMAZON_COGNITO_USER_POOLS"
    OPENID_CONNECT = "OPENID_CONNECT"
    AWS_LAMBDA = "AWS_LAMBDA"


@dataclass_json
@dataclass
class UpdateGraphqlAPIRequestBodyLambdaAuthorizerConfig:
    authorizer_result_ttl_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizerResultTtlInSeconds' }})
    authorizer_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizerUri' }})
    identity_validation_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identityValidationExpression' }})
    

@dataclass_json
@dataclass
class UpdateGraphqlAPIRequestBodyLogConfig:
    cloud_watch_logs_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudWatchLogsRoleArn' }})
    exclude_verbose_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludeVerboseContent' }})
    field_log_level: Optional[shared.FieldLogLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldLogLevel' }})
    

@dataclass_json
@dataclass
class UpdateGraphqlAPIRequestBodyOpenIDConnectConfig:
    auth_ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authTTL' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    iat_ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iatTTL' }})
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuer' }})
    

@dataclass_json
@dataclass
class UpdateGraphqlAPIRequestBodyUserPoolConfig:
    app_id_client_regex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appIdClientRegex' }})
    aws_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsRegion' }})
    default_action: Optional[shared.DefaultActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultAction' }})
    user_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userPoolId' }})
    

@dataclass_json
@dataclass
class UpdateGraphqlAPIRequestBody:
    additional_authentication_providers: Optional[List[shared.AdditionalAuthenticationProvider]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalAuthenticationProviders' }})
    authentication_type: Optional[UpdateGraphqlAPIRequestBodyAuthenticationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authenticationType' }})
    lambda_authorizer_config: Optional[UpdateGraphqlAPIRequestBodyLambdaAuthorizerConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambdaAuthorizerConfig' }})
    log_config: Optional[UpdateGraphqlAPIRequestBodyLogConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logConfig' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    open_id_connect_config: Optional[UpdateGraphqlAPIRequestBodyOpenIDConnectConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openIDConnectConfig' }})
    user_pool_config: Optional[UpdateGraphqlAPIRequestBodyUserPoolConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userPoolConfig' }})
    xray_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'xrayEnabled' }})
    

@dataclass
class UpdateGraphqlAPIRequest:
    path_params: UpdateGraphqlAPIPathParams = field(default=None)
    headers: UpdateGraphqlAPIHeaders = field(default=None)
    request: UpdateGraphqlAPIRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateGraphqlAPIResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    bad_request_exception: Optional[Any] = field(default=None)
    concurrent_modification_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    update_graphql_api_response: Optional[shared.UpdateGraphqlAPIResponse] = field(default=None)
    
