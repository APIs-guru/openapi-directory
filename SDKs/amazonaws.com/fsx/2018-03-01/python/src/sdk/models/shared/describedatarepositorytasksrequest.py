from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datarepositorytaskfilter


@dataclass_json
@dataclass
class DescribeDataRepositoryTasksRequest:
    filters: Optional[List[datarepositorytaskfilter.DataRepositoryTaskFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    task_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskIds' }})
    
