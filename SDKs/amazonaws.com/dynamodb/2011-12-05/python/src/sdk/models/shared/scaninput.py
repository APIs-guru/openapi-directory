from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import key
from . import condition


@dataclass_json
@dataclass
class ScanInput:
    attributes_to_get: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributesToGet' }})
    count: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Count' }})
    exclusive_start_key: Optional[key.Key] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExclusiveStartKey' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    scan_filter: Optional[dict[str, condition.Condition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScanFilter' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    
