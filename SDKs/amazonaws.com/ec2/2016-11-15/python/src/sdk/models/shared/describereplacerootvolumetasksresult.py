from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeReplaceRootVolumeTasksResult:
    next_token: Optional[str] = field(default=None)
    replace_root_volume_tasks: Optional[List[ReplaceRootVolumeTask]] = field(default=None)
    
