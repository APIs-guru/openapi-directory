from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import dynamodbdatasourceconfig
from . import elasticsearchdatasourceconfig
from . import httpdatasourceconfig
from . import lambdadatasourceconfig
from . import relationaldatabasedatasourceconfig
from . import datasourcetype_enum


@dataclass_json
@dataclass
class DataSource:
    data_source_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceArn' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    dynamodb_config: Optional[dynamodbdatasourceconfig.DynamodbDataSourceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamodbConfig' }})
    elasticsearch_config: Optional[elasticsearchdatasourceconfig.ElasticsearchDataSourceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'elasticsearchConfig' }})
    http_config: Optional[httpdatasourceconfig.HTTPDataSourceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpConfig' }})
    lambda_config: Optional[lambdadatasourceconfig.LambdaDataSourceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambdaConfig' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    relational_database_config: Optional[relationaldatabasedatasourceconfig.RelationalDatabaseDataSourceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationalDatabaseConfig' }})
    service_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceRoleArn' }})
    type: Optional[datasourcetype_enum.DataSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
