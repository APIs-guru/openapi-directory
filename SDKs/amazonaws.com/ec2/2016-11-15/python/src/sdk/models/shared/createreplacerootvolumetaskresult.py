from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateReplaceRootVolumeTaskResult:
    replace_root_volume_task: Optional[ReplaceRootVolumeTask] = field(default=None)
    
