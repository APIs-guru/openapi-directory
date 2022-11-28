from dataclasses import dataclass, field
from typing import List


@dataclass
class ListIdentityPoliciesResponse:
    r"""ListIdentityPoliciesResponse
    A list of names of sending authorization policies that apply to an identity.
    """
    
    policy_names: List[str] = field()
    
