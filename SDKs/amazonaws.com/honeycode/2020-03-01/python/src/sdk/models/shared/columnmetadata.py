from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import format_enum


@dataclass_json
@dataclass
class ColumnMetadata:
    format: format_enum.FormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
