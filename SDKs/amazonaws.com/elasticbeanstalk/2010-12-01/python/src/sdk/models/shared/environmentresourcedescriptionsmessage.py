from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class EnvironmentResourceDescriptionsMessage:
    r"""EnvironmentResourceDescriptionsMessage
    Result message containing a list of environment resource descriptions.
    """
    
    environment_resources: Optional[EnvironmentResourceDescription] = field(default=None)
    
