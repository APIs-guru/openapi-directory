from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbClusterSnapshotMessage:
    r"""DbClusterSnapshotMessage
    Represents the output of <a>DescribeDBClusterSnapshots</a>.
    """
    
    db_cluster_snapshots: Optional[List[DbClusterSnapshot]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
