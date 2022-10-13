from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import typedefinitionformat_enum


@dataclass_json
@dataclass
class Type:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    definition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'definition' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    format: Optional[typedefinitionformat_enum.TypeDefinitionFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
