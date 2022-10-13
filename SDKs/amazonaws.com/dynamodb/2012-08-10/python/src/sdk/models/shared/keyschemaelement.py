from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import keytype_enum


@dataclass_json
@dataclass
class KeySchemaElement:
    attribute_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeName' }})
    key_type: keytype_enum.KeyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyType' }})
    
