from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class LaunchConfigurationsType:
    launch_configurations: List[LaunchConfiguration] = field()
    next_token: Optional[str] = field(default=None)
    
