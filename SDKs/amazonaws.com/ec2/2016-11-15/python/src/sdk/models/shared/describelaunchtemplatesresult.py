from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeLaunchTemplatesResult:
    launch_templates: Optional[List[LaunchTemplate]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
