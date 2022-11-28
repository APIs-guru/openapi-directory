from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class LaunchTemplateTagSpecification:
    r"""LaunchTemplateTagSpecification
    The tag specification for the launch template.
    """
    
    resource_type: Optional[ResourceTypeEnum] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
