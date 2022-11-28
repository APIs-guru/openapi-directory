from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DeleteLaunchTemplateResult:
    launch_template: Optional[LaunchTemplate] = field(default=None)
    
