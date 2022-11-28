from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeLaunchTemplateVersionsResult:
    launch_template_versions: Optional[List[LaunchTemplateVersion]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
