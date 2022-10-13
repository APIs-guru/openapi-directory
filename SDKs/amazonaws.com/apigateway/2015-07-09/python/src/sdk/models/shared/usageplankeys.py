from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import usageplankey


@dataclass_json
@dataclass
class UsagePlanKeys:
    items: Optional[List[usageplankey.UsagePlanKey]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    
