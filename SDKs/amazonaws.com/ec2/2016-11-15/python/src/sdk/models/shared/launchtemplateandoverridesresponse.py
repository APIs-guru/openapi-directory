from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class LaunchTemplateAndOverridesResponse:
    r"""LaunchTemplateAndOverridesResponse
    Describes a launch template and overrides.
    """
    
    launch_template_specification: Optional[FleetLaunchTemplateSpecification] = field(default=None)
    overrides: Optional[FleetLaunchTemplateOverrides] = field(default=None)
    
