from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class UploadSSHPublicKeyResponse:
    r"""UploadSSHPublicKeyResponse
    Contains the response to a successful <a>UploadSSHPublicKey</a> request.
    """
    
    ssh_public_key: Optional[SSHPublicKey] = field(default=None)
    
