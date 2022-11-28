from dataclasses import dataclass, field
from . import *


@dataclass
class CreateInstanceProfileResponse:
    r"""CreateInstanceProfileResponse
    Contains the response to a successful <a>CreateInstanceProfile</a> request. 
    """
    
    instance_profile: InstanceProfile = field()
    
