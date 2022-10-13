from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import dynamokeytype_enum
from . import dynamokeytype_enum


@dataclass_json
@dataclass
class DynamoDbAction:
    hash_key_field: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hashKeyField' }})
    hash_key_type: Optional[dynamokeytype_enum.DynamoKeyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hashKeyType' }})
    hash_key_value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hashKeyValue' }})
    operation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operation' }})
    payload_field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payloadField' }})
    range_key_field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rangeKeyField' }})
    range_key_type: Optional[dynamokeytype_enum.DynamoKeyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rangeKeyType' }})
    range_key_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rangeKeyValue' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableName' }})
    
