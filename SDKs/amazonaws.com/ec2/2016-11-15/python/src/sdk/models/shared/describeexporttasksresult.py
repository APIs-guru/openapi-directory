from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeExportTasksResult:
    export_tasks: Optional[List[ExportTask]] = field(default=None)
    
