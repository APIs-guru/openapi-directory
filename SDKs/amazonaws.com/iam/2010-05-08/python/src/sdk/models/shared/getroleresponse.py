from dataclasses import dataclass, field
from . import *


@dataclass
class GetRoleResponse:
    r"""GetRoleResponse
    Contains the response to a successful <a>GetRole</a> request. 
    """
    
    role: Role = field()
    
