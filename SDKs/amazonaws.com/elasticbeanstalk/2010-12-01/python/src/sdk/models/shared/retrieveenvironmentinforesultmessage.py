from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class RetrieveEnvironmentInfoResultMessage:
    r"""RetrieveEnvironmentInfoResultMessage
    Result message containing a description of the requested environment info.
    """
    
    environment_info: Optional[List[EnvironmentInfoDescription]] = field(default=None)
    
