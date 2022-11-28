from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ApplicationDescriptionsMessage:
    r"""ApplicationDescriptionsMessage
    Result message containing a list of application descriptions.
    """
    
    applications: Optional[List[ApplicationDescription]] = field(default=None)
    
