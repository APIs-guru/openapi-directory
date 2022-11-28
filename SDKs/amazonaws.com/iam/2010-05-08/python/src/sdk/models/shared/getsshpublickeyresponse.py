from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class GetSSHPublicKeyResponse:
    r"""GetSSHPublicKeyResponse
    Contains the response to a successful <a>GetSSHPublicKey</a> request.
    """
    
    ssh_public_key: Optional[SSHPublicKey] = field(default=None)
    
