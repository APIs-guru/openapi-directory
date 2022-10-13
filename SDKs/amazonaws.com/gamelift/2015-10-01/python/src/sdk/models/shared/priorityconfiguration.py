from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import prioritytype_enum


@dataclass_json
@dataclass
class PriorityConfiguration:
    location_order: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocationOrder' }})
    priority_order: Optional[List[prioritytype_enum.PriorityTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PriorityOrder' }})
    
