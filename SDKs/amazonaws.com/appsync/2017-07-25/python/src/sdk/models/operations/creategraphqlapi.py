from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateGraphqlAPIHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class CreateGraphqlAPIRequestBodyAuthenticationTypeEnum(str, Enum):
    API_KEY = "API_KEY"
    AWS_IAM = "AWS_IAM"
    AMAZON_COGNITO_USER_POOLS = "AMAZON_COGNITO_USER_POOLS"
    OPENID_CONNECT = "OPENID_CONNECT"
    AWS_LAMBDA = "AWS_LAMBDA"


@dataclass_json
@dataclass
class CreateGraphqlAPIRequestBodyLambdaAuthorizerConfig:
    authorizer_result_ttl_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizerResultTtlInSeconds' }})
    authorizer_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizerUri' }})
    identity_validation_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identityValidationExpression' }})
    

@dataclass_json
@dataclass
class CreateGraphqlAPIRequestBodyLogConfig:
    cloud_watch_logs_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudWatchLogsRoleArn' }})
    exclude_verbose_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludeVerboseContent' }})
    field_log_level: Optional[shared.FieldLogLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldLogLevel' }})
    

@dataclass_json
@dataclass
class CreateGraphqlAPIRequestBodyOpenIDConnectConfig:
    auth_ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authTTL' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    iat_ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iatTTL' }})
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuer' }})
    

@dataclass_json
@dataclass
class CreateGraphqlAPIRequestBodyUserPoolConfig:
    app_id_client_regex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appIdClientRegex' }})
    aws_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsRegion' }})
    default_action: Optional[shared.DefaultActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultAction' }})
    user_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userPoolId' }})
    

@dataclass_json
@dataclass
class CreateGraphqlAPIRequestBody:
    additional_authentication_providers: Optional[List[shared.AdditionalAuthenticationProvider]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalAuthenticationProviders' }})
    authentication_type: CreateGraphqlAPIRequestBodyAuthenticationTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authenticationType' }})
    lambda_authorizer_config: Optional[CreateGraphqlAPIRequestBodyLambdaAuthorizerConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambdaAuthorizerConfig' }})
    log_config: Optional[CreateGraphqlAPIRequestBodyLogConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logConfig' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    open_id_connect_config: Optional[CreateGraphqlAPIRequestBodyOpenIDConnectConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openIDConnectConfig' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    user_pool_config: Optional[CreateGraphqlAPIRequestBodyUserPoolConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userPoolConfig' }})
    xray_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'xrayEnabled' }})
    

@dataclass
class CreateGraphqlAPIRequest:
    headers: CreateGraphqlAPIHeaders = field(default=None)
    request: CreateGraphqlAPIRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateGraphqlAPIResponse:
    api_limit_exceeded_exception: Optional[Any] = field(default=None)
    bad_request_exception: Optional[Any] = field(default=None)
    concurrent_modification_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_graphql_api_response: Optional[shared.CreateGraphqlAPIResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
