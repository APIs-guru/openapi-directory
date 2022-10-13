from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import payload


@dataclass_json
@dataclass
class DynamoDbAction:
    hash_key_field: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hashKeyField' }})
    hash_key_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hashKeyType' }})
    hash_key_value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hashKeyValue' }})
    operation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operation' }})
    payload: Optional[payload.Payload] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    payload_field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payloadField' }})
    range_key_field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rangeKeyField' }})
    range_key_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rangeKeyType' }})
    range_key_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rangeKeyValue' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableName' }})
    
