from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DisableFastSnapshotRestoresResult:
    successful: Optional[List[DisableFastSnapshotRestoreSuccessItem]] = field(default=None)
    unsuccessful: Optional[List[DisableFastSnapshotRestoreErrorItem]] = field(default=None)
    
