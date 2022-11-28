from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeVpcClassicLinkDNSSupportResult:
    next_token: Optional[str] = field(default=None)
    vpcs: Optional[List[ClassicLinkDNSSupport]] = field(default=None)
    
