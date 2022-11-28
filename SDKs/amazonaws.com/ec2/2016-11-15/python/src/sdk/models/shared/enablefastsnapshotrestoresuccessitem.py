from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class EnableFastSnapshotRestoreSuccessItem:
    r"""EnableFastSnapshotRestoreSuccessItem
    Describes fast snapshot restores that were successfully enabled.
    """
    
    availability_zone: Optional[str] = field(default=None)
    disabled_time: Optional[datetime] = field(default=None)
    disabling_time: Optional[datetime] = field(default=None)
    enabled_time: Optional[datetime] = field(default=None)
    enabling_time: Optional[datetime] = field(default=None)
    optimizing_time: Optional[datetime] = field(default=None)
    owner_alias: Optional[str] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    snapshot_id: Optional[str] = field(default=None)
    state: Optional[FastSnapshotRestoreStateCodeEnum] = field(default=None)
    state_transition_reason: Optional[str] = field(default=None)
    
