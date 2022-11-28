from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class CreateSnapshotsResult:
    snapshots: Optional[List[SnapshotInfo]] = field(default=None)
    
