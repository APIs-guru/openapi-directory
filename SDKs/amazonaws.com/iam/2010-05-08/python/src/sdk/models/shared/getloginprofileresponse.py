from dataclasses import dataclass, field
from . import *


@dataclass
class GetLoginProfileResponse:
    r"""GetLoginProfileResponse
    Contains the response to a successful <a>GetLoginProfile</a> request. 
    """
    
    login_profile: LoginProfile = field()
    
