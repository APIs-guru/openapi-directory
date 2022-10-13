from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import taskrunsortcolumntype_enum
from . import sortdirectiontype_enum


@dataclass_json
@dataclass
class TaskRunSortCriteria:
    column: taskrunsortcolumntype_enum.TaskRunSortColumnTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Column' }})
    sort_direction: sortdirectiontype_enum.SortDirectionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortDirection' }})
    
