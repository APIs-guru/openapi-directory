from dataclasses import dataclass, field
from . import *


@dataclass
class AccessPoliciesStatus:
    r"""AccessPoliciesStatus
    A <code>PolicyDocument</code> that specifies access policies for the search domain's services, and the current status of those policies.
    """
    
    options: str = field()
    status: OptionStatus = field()
    
