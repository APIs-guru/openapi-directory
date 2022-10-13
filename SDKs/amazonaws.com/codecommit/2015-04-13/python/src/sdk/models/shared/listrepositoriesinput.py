from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import orderenum_enum
from . import sortbyenum_enum


@dataclass_json
@dataclass
class ListRepositoriesInput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    order: Optional[orderenum_enum.OrderEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order' }})
    sort_by: Optional[sortbyenum_enum.SortByEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortBy' }})
    
