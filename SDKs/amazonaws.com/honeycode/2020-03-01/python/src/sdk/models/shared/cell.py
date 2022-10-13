from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import format_enum


@dataclass_json
@dataclass
class Cell:
    format: Optional[format_enum.FormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    formatted_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formattedValue' }})
    formula: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formula' }})
    raw_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rawValue' }})
    
