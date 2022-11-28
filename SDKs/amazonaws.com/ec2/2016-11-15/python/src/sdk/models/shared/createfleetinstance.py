from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class CreateFleetInstance:
    r"""CreateFleetInstance
    Describes the instances that were launched by the fleet.
    """
    
    instance_ids: Optional[List[str]] = field(default=None)
    instance_type: Optional[InstanceTypeEnum] = field(default=None)
    launch_template_and_overrides: Optional[LaunchTemplateAndOverridesResponse] = field(default=None)
    lifecycle: Optional[InstanceLifecycleEnum] = field(default=None)
    platform: Optional[PlatformValuesEnum] = field(default=None)
    
