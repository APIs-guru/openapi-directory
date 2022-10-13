from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import buildbatchfilter
from . import sortordertype_enum


@dataclass_json
@dataclass
class ListBuildBatchesForProjectInput:
    filter: Optional[buildbatchfilter.BuildBatchFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    project_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectName' }})
    sort_order: Optional[sortordertype_enum.SortOrderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    
