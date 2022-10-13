from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import actionowner_enum


@dataclass_json
@dataclass
class ListActionTypesInput:
    action_owner_filter: Optional[actionowner_enum.ActionOwnerEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionOwnerFilter' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    region_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionFilter' }})
    
