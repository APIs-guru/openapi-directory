from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import listprofileobjectsitem


@dataclass_json
@dataclass
class ListProfileObjectsResponse:
    items: Optional[List[listprofileobjectsitem.ListProfileObjectsItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Items' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
