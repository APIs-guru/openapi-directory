from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class SnapshotInfo:
    r"""SnapshotInfo
    Information about a snapshot.
    """
    
    description: Optional[str] = field(default=None)
    encrypted: Optional[bool] = field(default=None)
    outpost_arn: Optional[str] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    progress: Optional[str] = field(default=None)
    snapshot_id: Optional[str] = field(default=None)
    start_time: Optional[datetime] = field(default=None)
    state: Optional[SnapshotStateEnum] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    volume_id: Optional[str] = field(default=None)
    volume_size: Optional[int] = field(default=None)
    
