from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class GetLaunchTemplateDataResult:
    launch_template_data: Optional[ResponseLaunchTemplateData] = field(default=None)
    
