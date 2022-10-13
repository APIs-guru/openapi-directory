from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import key


@dataclass_json
@dataclass
class GetItemInput:
    attributes_to_get: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributesToGet' }})
    consistent_read: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsistentRead' }})
    key: key.Key = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    
