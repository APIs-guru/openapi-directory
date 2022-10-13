from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import eventcategorygroup


@dataclass_json
@dataclass
class DescribeEventCategoriesResponse:
    event_category_group_list: Optional[List[eventcategorygroup.EventCategoryGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventCategoryGroupList' }})
    
