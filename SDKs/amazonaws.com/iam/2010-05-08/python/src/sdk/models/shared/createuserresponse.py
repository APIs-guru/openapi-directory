from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateUserResponse:
    r"""CreateUserResponse
    Contains the response to a successful <a>CreateUser</a> request. 
    """
    
    user: Optional[User] = field(default=None)
    
