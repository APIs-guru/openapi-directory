from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import taskrunfiltercriteria
from . import taskrunsortcriteria


@dataclass_json
@dataclass
class GetMlTaskRunsRequest:
    filter: Optional[taskrunfiltercriteria.TaskRunFilterCriteria] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filter' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    sort: Optional[taskrunsortcriteria.TaskRunSortCriteria] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sort' }})
    transform_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformId' }})
    
