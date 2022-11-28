from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class TagDescription:
    r"""TagDescription
    The tags associated with a load balancer.
    """
    
    load_balancer_name: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
