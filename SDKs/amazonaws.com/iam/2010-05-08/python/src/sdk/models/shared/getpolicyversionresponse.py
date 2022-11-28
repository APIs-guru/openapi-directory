from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class GetPolicyVersionResponse:
    r"""GetPolicyVersionResponse
    Contains the response to a successful <a>GetPolicyVersion</a> request. 
    """
    
    policy_version: Optional[PolicyVersion] = field(default=None)
    
