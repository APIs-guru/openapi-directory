from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import comparator_enum


@dataclass_json
@dataclass
class PropertyPredicate:
    comparator: Optional[comparator_enum.ComparatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Comparator' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
