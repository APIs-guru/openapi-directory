from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import eirpunits_enum


@dataclass_json
@dataclass
class Eirp:
    units: eirpunits_enum.EirpUnitsEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'units' }})
    value: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
