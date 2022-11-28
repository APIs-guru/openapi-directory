from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeFastSnapshotRestoresResult:
    fast_snapshot_restores: Optional[List[DescribeFastSnapshotRestoreSuccessItem]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
