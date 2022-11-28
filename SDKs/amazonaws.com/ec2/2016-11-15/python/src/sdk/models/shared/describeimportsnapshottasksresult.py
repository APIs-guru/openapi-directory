from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeImportSnapshotTasksResult:
    import_snapshot_tasks: Optional[List[ImportSnapshotTask]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
