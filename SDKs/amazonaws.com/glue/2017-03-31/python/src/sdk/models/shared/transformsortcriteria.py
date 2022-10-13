from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import transformsortcolumntype_enum
from . import sortdirectiontype_enum


@dataclass_json
@dataclass
class TransformSortCriteria:
    column: transformsortcolumntype_enum.TransformSortColumnTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Column' }})
    sort_direction: sortdirectiontype_enum.SortDirectionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortDirection' }})
    
