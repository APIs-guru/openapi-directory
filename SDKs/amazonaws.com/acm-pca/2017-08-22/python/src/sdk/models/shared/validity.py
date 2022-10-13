from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import validityperiodtype_enum


@dataclass_json
@dataclass
class Validity:
    type: validityperiodtype_enum.ValidityPeriodTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    value: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
