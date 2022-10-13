from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import sortorder_enum
from . import taskdefinitionstatus_enum


@dataclass_json
@dataclass
class ListTaskDefinitionsRequest:
    family_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'familyPrefix' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    sort: Optional[sortorder_enum.SortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sort' }})
    status: Optional[taskdefinitionstatus_enum.TaskDefinitionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
