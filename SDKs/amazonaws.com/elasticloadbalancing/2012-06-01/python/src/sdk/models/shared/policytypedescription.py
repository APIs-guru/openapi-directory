from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class PolicyTypeDescription:
    r"""PolicyTypeDescription
    Information about a policy type.
    """
    
    description: Optional[str] = field(default=None)
    policy_attribute_type_descriptions: Optional[List[PolicyAttributeTypeDescription]] = field(default=None)
    policy_type_name: Optional[str] = field(default=None)
    
