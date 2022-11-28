from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateLaunchTemplateVersionResult:
    launch_template_version: Optional[LaunchTemplateVersion] = field(default=None)
    warning: Optional[ValidationWarning] = field(default=None)
    
