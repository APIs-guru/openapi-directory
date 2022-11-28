from dataclasses import dataclass, field
from . import *


@dataclass
class GetUserResponse:
    r"""GetUserResponse
    Contains the response to a successful <a>GetUser</a> request. 
    """
    
    user: User = field()
    
