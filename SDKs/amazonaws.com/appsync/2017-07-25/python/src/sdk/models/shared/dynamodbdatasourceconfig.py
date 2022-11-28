from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DynamodbDataSourceConfig:
    r"""DynamodbDataSourceConfig
    Describes an Amazon DynamoDB data source configuration.
    """
    
    aws_region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsRegion') }})
    table_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableName') }})
    delta_sync_config: Optional[DeltaSyncConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deltaSyncConfig') }})
    use_caller_credentials: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useCallerCredentials') }})
    versioned: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versioned') }})
    
