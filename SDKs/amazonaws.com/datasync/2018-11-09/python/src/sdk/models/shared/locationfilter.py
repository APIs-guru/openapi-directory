from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import locationfiltername_enum
from . import operator_enum


@dataclass_json
@dataclass
class LocationFilter:
    name: locationfiltername_enum.LocationFilterNameEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    operator: operator_enum.OperatorEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Operator' }})
    values: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Values' }})
    
