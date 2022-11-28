from dataclasses import dataclass, field
from . import *


@dataclass
class AccessPoliciesStatus:
    r"""AccessPoliciesStatus
    The configured access rules for the domain's document and search endpoints, and the current status of those rules.
    """
    
    options: str = field()
    status: OptionStatus = field()
    
