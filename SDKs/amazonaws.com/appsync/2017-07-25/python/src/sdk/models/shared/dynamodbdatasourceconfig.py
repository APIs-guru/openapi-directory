from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import deltasyncconfig


@dataclass_json
@dataclass
class DynamodbDataSourceConfig:
    aws_region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsRegion' }})
    delta_sync_config: Optional[deltasyncconfig.DeltaSyncConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deltaSyncConfig' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableName' }})
    use_caller_credentials: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useCallerCredentials' }})
    versioned: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versioned' }})
    
