from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import key
from . import attributevalue
from . import condition


@dataclass_json
@dataclass
class QueryInput:
    attributes_to_get: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributesToGet' }})
    consistent_read: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsistentRead' }})
    count: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Count' }})
    exclusive_start_key: Optional[key.Key] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExclusiveStartKey' }})
    hash_key_value: attributevalue.AttributeValue = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HashKeyValue' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    range_key_condition: Optional[condition.Condition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RangeKeyCondition' }})
    scan_index_forward: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScanIndexForward' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    
