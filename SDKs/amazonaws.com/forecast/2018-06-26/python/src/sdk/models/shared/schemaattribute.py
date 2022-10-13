from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import attributetype_enum


@dataclass_json
@dataclass
class SchemaAttribute:
    attribute_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeName' }})
    attribute_type: Optional[attributetype_enum.AttributeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeType' }})
    
