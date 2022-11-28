from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreatePolicyResponse:
    r"""CreatePolicyResponse
    Contains the response to a successful <a>CreatePolicy</a> request. 
    """
    
    policy: Optional[Policy] = field(default=None)
    
