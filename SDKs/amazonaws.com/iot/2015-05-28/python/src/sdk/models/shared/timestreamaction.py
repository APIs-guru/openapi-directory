from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import timestreamdimension
from . import timestreamtimestamp


@dataclass_json
@dataclass
class TimestreamAction:
    database_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'databaseName' }})
    dimensions: List[timestreamdimension.TimestreamDimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableName' }})
    timestamp: Optional[timestreamtimestamp.TimestreamTimestamp] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    
