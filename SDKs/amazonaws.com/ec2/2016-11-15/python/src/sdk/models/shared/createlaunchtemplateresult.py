from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateLaunchTemplateResult:
    launch_template: Optional[LaunchTemplate] = field(default=None)
    warning: Optional[ValidationWarning] = field(default=None)
    
