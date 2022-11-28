from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class FleetLaunchTemplateConfig:
    r"""FleetLaunchTemplateConfig
    Describes a launch template and overrides.
    """
    
    launch_template_specification: Optional[FleetLaunchTemplateSpecification] = field(default=None)
    overrides: Optional[List[FleetLaunchTemplateOverrides]] = field(default=None)
    
