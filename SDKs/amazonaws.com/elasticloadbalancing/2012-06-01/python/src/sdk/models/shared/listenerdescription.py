from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ListenerDescription:
    r"""ListenerDescription
    The policies enabled for a listener.
    """
    
    listener: Optional[Listener] = field(default=None)
    policy_names: Optional[List[str]] = field(default=None)
    
