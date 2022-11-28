from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class InstanceEventWindow:
    r"""InstanceEventWindow
    The event window.
    """
    
    association_target: Optional[InstanceEventWindowAssociationTarget] = field(default=None)
    cron_expression: Optional[str] = field(default=None)
    instance_event_window_id: Optional[str] = field(default=None)
    name: Optional[str] = field(default=None)
    state: Optional[InstanceEventWindowStateEnum] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    time_ranges: Optional[List[InstanceEventWindowTimeRange]] = field(default=None)
    
