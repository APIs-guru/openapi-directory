from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import condition
from . import logical_enum


@dataclass_json
@dataclass
class Predicate:
    conditions: Optional[List[condition.Condition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Conditions' }})
    logical: Optional[logical_enum.LogicalEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Logical' }})
    
