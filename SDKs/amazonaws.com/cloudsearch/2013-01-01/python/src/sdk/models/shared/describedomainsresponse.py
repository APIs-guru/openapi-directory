from dataclasses import dataclass, field
from typing import List
from . import *


@dataclass
class DescribeDomainsResponse:
    r"""DescribeDomainsResponse
    The result of a <code>DescribeDomains</code> request. Contains the status of the domains specified in the request or all domains owned by the account.
    """
    
    domain_status_list: List[DomainStatus] = field()
    
