from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class EnableFastSnapshotRestoresResult:
    successful: Optional[List[EnableFastSnapshotRestoreSuccessItem]] = field(default=None)
    unsuccessful: Optional[List[EnableFastSnapshotRestoreErrorItem]] = field(default=None)
    
