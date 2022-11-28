from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class PolicyGrantingServiceAccess:
    r"""PolicyGrantingServiceAccess
    <p>Contains details about the permissions policies that are attached to the specified identity (user, group, or role).</p> <p>This data type is an element of the <a>ListPoliciesGrantingServiceAccessEntry</a> object.</p>
    """
    
    policy_name: str = field()
    policy_type: PolicyTypeEnum = field()
    entity_name: Optional[str] = field(default=None)
    entity_type: Optional[PolicyOwnerEntityTypeEnum] = field(default=None)
    policy_arn: Optional[str] = field(default=None)
    
