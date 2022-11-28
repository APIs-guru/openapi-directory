from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class InstanceEventWindowAssociationTarget:
    r"""InstanceEventWindowAssociationTarget
    One or more targets associated with the event window.
    """
    
    dedicated_host_ids: Optional[List[str]] = field(default=None)
    instance_ids: Optional[List[str]] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
