from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbClusterSnapshotAttributesResult:
    r"""DbClusterSnapshotAttributesResult
    Detailed information about the attributes that are associated with a cluster snapshot.
    """
    
    db_cluster_snapshot_attributes: Optional[List[DbClusterSnapshotAttribute]] = field(default=None)
    db_cluster_snapshot_identifier: Optional[str] = field(default=None)
    
