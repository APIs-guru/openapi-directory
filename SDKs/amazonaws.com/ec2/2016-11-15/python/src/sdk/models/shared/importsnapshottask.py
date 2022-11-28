from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ImportSnapshotTask:
    r"""ImportSnapshotTask
    Describes an import snapshot task.
    """
    
    description: Optional[str] = field(default=None)
    import_task_id: Optional[str] = field(default=None)
    snapshot_task_detail: Optional[SnapshotTaskDetail] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
