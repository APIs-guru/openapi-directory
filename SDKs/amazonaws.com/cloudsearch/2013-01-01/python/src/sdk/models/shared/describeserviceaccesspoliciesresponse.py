from dataclasses import dataclass, field
from . import *


@dataclass
class DescribeServiceAccessPoliciesResponse:
    r"""DescribeServiceAccessPoliciesResponse
    The result of a <code>DescribeServiceAccessPolicies</code> request.
    """
    
    access_policies: AccessPoliciesStatus = field()
    
