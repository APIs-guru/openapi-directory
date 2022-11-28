from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ImportSnapshotResult:
    description: Optional[str] = field(default=None)
    import_task_id: Optional[str] = field(default=None)
    snapshot_task_detail: Optional[SnapshotTaskDetail] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
