from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class RestoreDbClusterFromSnapshotResult:
    db_cluster: Optional[DbCluster] = field(default=None)
    
