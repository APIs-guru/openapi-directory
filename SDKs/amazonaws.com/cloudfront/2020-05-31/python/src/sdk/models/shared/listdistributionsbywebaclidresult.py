from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ListDistributionsByWebACLIDResult:
    r"""ListDistributionsByWebACLIDResult
    The response to a request to list the distributions that are associated with a specified WAF web ACL.
    """
    
    distribution_list: Optional[DistributionList] = field(default=None)
    
