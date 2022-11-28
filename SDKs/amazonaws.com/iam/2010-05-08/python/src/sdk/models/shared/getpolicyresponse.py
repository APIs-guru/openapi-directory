from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class GetPolicyResponse:
    r"""GetPolicyResponse
    Contains the response to a successful <a>GetPolicy</a> request. 
    """
    
    policy: Optional[Policy] = field(default=None)
    
