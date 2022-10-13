from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import searchquantumtasksfilteroperator_enum


@dataclass_json
@dataclass
class SearchQuantumTasksFilter:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    operator: searchquantumtasksfilteroperator_enum.SearchQuantumTasksFilterOperatorEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operator' }})
    values: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
