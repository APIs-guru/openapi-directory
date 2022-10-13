from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import lookupattributekey_enum


@dataclass_json
@dataclass
class LookupAttribute:
    attribute_key: lookupattributekey_enum.LookupAttributeKeyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeKey' }})
    attribute_value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeValue' }})
    
