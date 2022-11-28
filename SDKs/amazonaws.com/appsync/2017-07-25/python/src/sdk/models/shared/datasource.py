from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataSource:
    r"""DataSource
    Describes a data source.
    """
    
    data_source_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceArn') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    dynamodb_config: Optional[DynamodbDataSourceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamodbConfig') }})
    elasticsearch_config: Optional[ElasticsearchDataSourceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elasticsearchConfig') }})
    http_config: Optional[HTTPDataSourceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpConfig') }})
    lambda_config: Optional[LambdaDataSourceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaConfig') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    relational_database_config: Optional[RelationalDatabaseDataSourceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationalDatabaseConfig') }})
    service_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceRoleArn') }})
    type: Optional[DataSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
