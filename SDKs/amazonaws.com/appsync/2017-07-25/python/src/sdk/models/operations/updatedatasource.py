from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateDataSourcePathParams:
    api_id: str = field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDataSourceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateDataSourceRequestBodyDynamodbConfig:
    r"""UpdateDataSourceRequestBodyDynamodbConfig
    Describes an Amazon DynamoDB data source configuration.
    """
    
    aws_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsRegion') }})
    delta_sync_config: Optional[shared.DeltaSyncConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deltaSyncConfig') }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableName') }})
    use_caller_credentials: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useCallerCredentials') }})
    versioned: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versioned') }})
    

@dataclass_json
@dataclass
class UpdateDataSourceRequestBodyElasticsearchConfig:
    r"""UpdateDataSourceRequestBodyElasticsearchConfig
    Describes an Elasticsearch data source configuration.
    """
    
    aws_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsRegion') }})
    endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    

@dataclass_json
@dataclass
class UpdateDataSourceRequestBodyHTTPConfig:
    r"""UpdateDataSourceRequestBodyHTTPConfig
    Describes an HTTP data source configuration.
    """
    
    authorization_config: Optional[shared.AuthorizationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizationConfig') }})
    endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    

@dataclass_json
@dataclass
class UpdateDataSourceRequestBodyLambdaConfig:
    r"""UpdateDataSourceRequestBodyLambdaConfig
    Describes an Amazon Web Services Lambda data source configuration.
    """
    
    lambda_function_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaFunctionArn') }})
    

@dataclass_json
@dataclass
class UpdateDataSourceRequestBodyRelationalDatabaseConfig:
    r"""UpdateDataSourceRequestBodyRelationalDatabaseConfig
    Describes a relational database data source configuration.
    """
    
    rds_http_endpoint_config: Optional[shared.RdsHTTPEndpointConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rdsHttpEndpointConfig') }})
    relational_database_source_type: Optional[shared.RelationalDatabaseSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationalDatabaseSourceType') }})
    
class UpdateDataSourceRequestBodyTypeEnum(str, Enum):
    AWS_LAMBDA = "AWS_LAMBDA"
    AMAZON_DYNAMODB = "AMAZON_DYNAMODB"
    AMAZON_ELASTICSEARCH = "AMAZON_ELASTICSEARCH"
    NONE = "NONE"
    HTTP = "HTTP"
    RELATIONAL_DATABASE = "RELATIONAL_DATABASE"


@dataclass_json
@dataclass
class UpdateDataSourceRequestBody:
    type: UpdateDataSourceRequestBodyTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    dynamodb_config: Optional[UpdateDataSourceRequestBodyDynamodbConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamodbConfig') }})
    elasticsearch_config: Optional[UpdateDataSourceRequestBodyElasticsearchConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elasticsearchConfig') }})
    http_config: Optional[UpdateDataSourceRequestBodyHTTPConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpConfig') }})
    lambda_config: Optional[UpdateDataSourceRequestBodyLambdaConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaConfig') }})
    relational_database_config: Optional[UpdateDataSourceRequestBodyRelationalDatabaseConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationalDatabaseConfig') }})
    service_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceRoleArn') }})
    

@dataclass
class UpdateDataSourceRequest:
    headers: UpdateDataSourceHeaders = field()
    path_params: UpdateDataSourcePathParams = field()
    request: UpdateDataSourceRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDataSourceResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    concurrent_modification_exception: Optional[Any] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    update_data_source_response: Optional[shared.UpdateDataSourceResponse] = field(default=None)
    
