from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeSnapshotsListMessage:
    r"""DescribeSnapshotsListMessage
    Represents the output of a <code>DescribeSnapshots</code> operation.
    """
    
    marker: Optional[str] = field(default=None)
    snapshots: Optional[List[Snapshot]] = field(default=None)
    
