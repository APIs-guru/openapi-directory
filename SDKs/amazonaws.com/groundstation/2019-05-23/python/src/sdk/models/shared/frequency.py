from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import frequencyunits_enum


@dataclass_json
@dataclass
class Frequency:
    units: frequencyunits_enum.FrequencyUnitsEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'units' }})
    value: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
