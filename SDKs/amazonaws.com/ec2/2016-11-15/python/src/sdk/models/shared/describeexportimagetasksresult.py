from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeExportImageTasksResult:
    export_image_tasks: Optional[List[ExportImageTask]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
