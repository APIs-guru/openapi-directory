from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class LaunchTemplateConfig:
    r"""LaunchTemplateConfig
    Describes a launch template and overrides.
    """
    
    launch_template_specification: Optional[FleetLaunchTemplateSpecification] = field(default=None)
    overrides: Optional[List[LaunchTemplateOverrides]] = field(default=None)
    
