from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import exportinfo


@dataclass_json
@dataclass
class DescribeExportTasksResponse:
    exports_info: Optional[List[exportinfo.ExportInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exportsInfo' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
