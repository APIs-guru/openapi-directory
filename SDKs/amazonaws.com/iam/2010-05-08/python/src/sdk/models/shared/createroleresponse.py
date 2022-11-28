from dataclasses import dataclass, field
from . import *


@dataclass
class CreateRoleResponse:
    r"""CreateRoleResponse
    Contains the response to a successful <a>CreateRole</a> request. 
    """
    
    role: Role = field()
    
