from dataclasses import dataclass, field
from . import *


@dataclass
class DescribeServiceAccessPoliciesResponse:
    r"""DescribeServiceAccessPoliciesResponse
    A response message that contains the access policies for a domain.
    """
    
    access_policies: AccessPoliciesStatus = field()
    
