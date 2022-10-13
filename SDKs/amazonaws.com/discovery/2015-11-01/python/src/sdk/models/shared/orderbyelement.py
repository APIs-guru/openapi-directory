from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import orderstring_enum


@dataclass_json
@dataclass
class OrderByElement:
    field_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldName' }})
    sort_order: Optional[orderstring_enum.OrderStringEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    
