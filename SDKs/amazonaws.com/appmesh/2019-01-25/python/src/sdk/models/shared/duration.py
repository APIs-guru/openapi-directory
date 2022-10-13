from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import durationunit_enum


@dataclass_json
@dataclass
class Duration:
    unit: Optional[durationunit_enum.DurationUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
