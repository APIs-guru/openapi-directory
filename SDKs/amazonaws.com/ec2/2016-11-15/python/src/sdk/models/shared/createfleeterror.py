from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class CreateFleetError:
    r"""CreateFleetError
    Describes the instances that could not be launched by the fleet.
    """
    
    error_code: Optional[str] = field(default=None)
    error_message: Optional[str] = field(default=None)
    launch_template_and_overrides: Optional[LaunchTemplateAndOverridesResponse] = field(default=None)
    lifecycle: Optional[InstanceLifecycleEnum] = field(default=None)
    
