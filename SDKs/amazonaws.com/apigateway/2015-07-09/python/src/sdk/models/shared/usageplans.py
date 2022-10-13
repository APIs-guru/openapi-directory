from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import usageplan


@dataclass_json
@dataclass
class UsagePlans:
    items: Optional[List[usageplan.UsagePlan]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    
