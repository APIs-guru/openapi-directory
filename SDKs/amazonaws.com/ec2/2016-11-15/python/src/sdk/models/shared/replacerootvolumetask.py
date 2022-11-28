from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class ReplaceRootVolumeTask:
    r"""ReplaceRootVolumeTask
    Information about a root volume replacement task.
    """
    
    complete_time: Optional[str] = field(default=None)
    instance_id: Optional[str] = field(default=None)
    replace_root_volume_task_id: Optional[str] = field(default=None)
    start_time: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    task_state: Optional[ReplaceRootVolumeTaskStateEnum] = field(default=None)
    
