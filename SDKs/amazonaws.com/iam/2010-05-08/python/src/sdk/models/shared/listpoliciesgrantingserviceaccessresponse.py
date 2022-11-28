from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ListPoliciesGrantingServiceAccessResponse:
    policies_granting_service_access: List[ListPoliciesGrantingServiceAccessEntry] = field()
    is_truncated: Optional[bool] = field(default=None)
    marker: Optional[str] = field(default=None)
    
