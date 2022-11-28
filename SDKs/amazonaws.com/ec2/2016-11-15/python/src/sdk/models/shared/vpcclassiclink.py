from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class VpcClassicLink:
    r"""VpcClassicLink
    Describes whether a VPC is enabled for ClassicLink.
    """
    
    classic_link_enabled: Optional[bool] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
