from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class EnvironmentDescriptionsMessage:
    r"""EnvironmentDescriptionsMessage
    Result message containing a list of environment descriptions.
    """
    
    environments: Optional[List[EnvironmentDescription]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
