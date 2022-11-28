from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class PolicyDescription:
    r"""PolicyDescription
    Information about a policy.
    """
    
    policy_attribute_descriptions: Optional[List[PolicyAttributeDescription]] = field(default=None)
    policy_name: Optional[str] = field(default=None)
    policy_type_name: Optional[str] = field(default=None)
    
