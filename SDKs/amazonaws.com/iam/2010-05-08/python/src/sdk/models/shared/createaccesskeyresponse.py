from dataclasses import dataclass, field
from . import *


@dataclass
class CreateAccessKeyResponse:
    r"""CreateAccessKeyResponse
    Contains the response to a successful <a>CreateAccessKey</a> request. 
    """
    
    access_key: AccessKey = field()
    
