from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import sort_enum


@dataclass_json
@dataclass
class SortCriterion:
    field_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FieldName' }})
    sort: Optional[sort_enum.SortEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sort' }})
    
