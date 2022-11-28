from dataclasses import dataclass, field
from . import *


@dataclass
class CreateLoginProfileResponse:
    r"""CreateLoginProfileResponse
    Contains the response to a successful <a>CreateLoginProfile</a> request. 
    """
    
    login_profile: LoginProfile = field()
    
