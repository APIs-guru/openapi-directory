from dataclasses import dataclass, field
from typing import List
from . import *


@dataclass
class DescribeDomainsResponse:
    r"""DescribeDomainsResponse
    A response message that contains the status of one or more domains.
    """
    
    domain_status_list: List[DomainStatus] = field()
    
