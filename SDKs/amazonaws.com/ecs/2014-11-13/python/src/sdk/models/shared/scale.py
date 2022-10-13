from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import scaleunit_enum


@dataclass_json
@dataclass
class Scale:
    unit: Optional[scaleunit_enum.ScaleUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
