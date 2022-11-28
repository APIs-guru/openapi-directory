from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeSnapshotsResult:
    next_token: Optional[str] = field(default=None)
    snapshots: Optional[List[Snapshot]] = field(default=None)
    
