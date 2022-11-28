from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ClassicLinkInstance:
    r"""ClassicLinkInstance
    Describes a linked EC2-Classic instance.
    """
    
    groups: Optional[List[GroupIdentifier]] = field(default=None)
    instance_id: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
