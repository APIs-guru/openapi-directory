from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import exportfilter


@dataclass_json
@dataclass
class DescribeExportTasksRequest:
    export_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exportIds' }})
    filters: Optional[List[exportfilter.ExportFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
