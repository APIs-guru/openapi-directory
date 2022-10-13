from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import scalarattributetype_enum


@dataclass_json
@dataclass
class AttributeDefinition:
    attribute_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeName' }})
    attribute_type: scalarattributetype_enum.ScalarAttributeTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeType' }})
    
