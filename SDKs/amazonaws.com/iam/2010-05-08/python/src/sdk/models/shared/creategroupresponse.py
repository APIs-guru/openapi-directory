from dataclasses import dataclass, field
from . import *


@dataclass
class CreateGroupResponse:
    r"""CreateGroupResponse
    Contains the response to a successful <a>CreateGroup</a> request. 
    """
    
    group: Group = field()
    
