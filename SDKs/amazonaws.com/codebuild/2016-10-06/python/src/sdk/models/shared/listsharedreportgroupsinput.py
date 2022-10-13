from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import sharedresourcesortbytype_enum
from . import sortordertype_enum


@dataclass_json
@dataclass
class ListSharedReportGroupsInput:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    sort_by: Optional[sharedresourcesortbytype_enum.SharedResourceSortByTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortBy' }})
    sort_order: Optional[sortordertype_enum.SortOrderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    
