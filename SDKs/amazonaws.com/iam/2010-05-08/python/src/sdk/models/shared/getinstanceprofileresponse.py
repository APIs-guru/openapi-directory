from dataclasses import dataclass, field
from . import *


@dataclass
class GetInstanceProfileResponse:
    r"""GetInstanceProfileResponse
    Contains the response to a successful <a>GetInstanceProfile</a> request. 
    """
    
    instance_profile: InstanceProfile = field()
    
