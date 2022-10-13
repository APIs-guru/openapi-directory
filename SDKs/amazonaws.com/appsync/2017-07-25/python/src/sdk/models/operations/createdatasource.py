from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateDataSourcePathParams:
    api_id: str = field(default=None, metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateDataSourceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateDataSourceRequestBodyDynamodbConfig:
    aws_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsRegion' }})
    delta_sync_config: Optional[shared.DeltaSyncConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deltaSyncConfig' }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableName' }})
    use_caller_credentials: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useCallerCredentials' }})
    versioned: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versioned' }})
    

@dataclass_json
@dataclass
class CreateDataSourceRequestBodyElasticsearchConfig:
    aws_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsRegion' }})
    endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpoint' }})
    

@dataclass_json
@dataclass
class CreateDataSourceRequestBodyHTTPConfig:
    authorization_config: Optional[shared.AuthorizationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizationConfig' }})
    endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpoint' }})
    

@dataclass_json
@dataclass
class CreateDataSourceRequestBodyLambdaConfig:
    lambda_function_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambdaFunctionArn' }})
    

@dataclass_json
@dataclass
class CreateDataSourceRequestBodyRelationalDatabaseConfig:
    rds_http_endpoint_config: Optional[shared.RdsHTTPEndpointConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rdsHttpEndpointConfig' }})
    relational_database_source_type: Optional[shared.RelationalDatabaseSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationalDatabaseSourceType' }})
    
class CreateDataSourceRequestBodyTypeEnum(str, Enum):
    AWS_LAMBDA = "AWS_LAMBDA"
    AMAZON_DYNAMODB = "AMAZON_DYNAMODB"
    AMAZON_ELASTICSEARCH = "AMAZON_ELASTICSEARCH"
    NONE = "NONE"
    HTTP = "HTTP"
    RELATIONAL_DATABASE = "RELATIONAL_DATABASE"


@dataclass_json
@dataclass
class CreateDataSourceRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    dynamodb_config: Optional[CreateDataSourceRequestBodyDynamodbConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamodbConfig' }})
    elasticsearch_config: Optional[CreateDataSourceRequestBodyElasticsearchConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'elasticsearchConfig' }})
    http_config: Optional[CreateDataSourceRequestBodyHTTPConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpConfig' }})
    lambda_config: Optional[CreateDataSourceRequestBodyLambdaConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambdaConfig' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    relational_database_config: Optional[CreateDataSourceRequestBodyRelationalDatabaseConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationalDatabaseConfig' }})
    service_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceRoleArn' }})
    type: CreateDataSourceRequestBodyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class CreateDataSourceRequest:
    path_params: CreateDataSourcePathParams = field(default=None)
    headers: CreateDataSourceHeaders = field(default=None)
    request: CreateDataSourceRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDataSourceResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    concurrent_modification_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_data_source_response: Optional[shared.CreateDataSourceResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
