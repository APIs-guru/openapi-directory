from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ListPoliciesGrantingServiceAccessEntry:
    r"""ListPoliciesGrantingServiceAccessEntry
    <p>Contains details about the permissions policies that are attached to the specified identity (user, group, or role).</p> <p>This data type is used as a response element in the <a>ListPoliciesGrantingServiceAccess</a> operation.</p>
    """
    
    policies: Optional[List[PolicyGrantingServiceAccess]] = field(default=None)
    service_namespace: Optional[str] = field(default=None)
    
