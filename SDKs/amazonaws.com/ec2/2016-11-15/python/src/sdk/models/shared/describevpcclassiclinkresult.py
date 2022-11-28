from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeVpcClassicLinkResult:
    vpcs: Optional[List[VpcClassicLink]] = field(default=None)
    
