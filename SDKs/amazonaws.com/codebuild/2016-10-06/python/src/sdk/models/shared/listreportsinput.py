from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import reportfilter
from . import sortordertype_enum


@dataclass_json
@dataclass
class ListReportsInput:
    filter: Optional[reportfilter.ReportFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    sort_order: Optional[sortordertype_enum.SortOrderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    
