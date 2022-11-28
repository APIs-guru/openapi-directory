from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreatePolicyVersionResponse:
    r"""CreatePolicyVersionResponse
    Contains the response to a successful <a>CreatePolicyVersion</a> request. 
    """
    
    policy_version: Optional[PolicyVersion] = field(default=None)
    
