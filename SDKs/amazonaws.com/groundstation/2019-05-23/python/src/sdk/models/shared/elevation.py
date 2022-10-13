from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import angleunits_enum


@dataclass_json
@dataclass
class Elevation:
    unit: angleunits_enum.AngleUnitsEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    value: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
