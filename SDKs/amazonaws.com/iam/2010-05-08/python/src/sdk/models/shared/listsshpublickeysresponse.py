from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ListSSHPublicKeysResponse:
    r"""ListSSHPublicKeysResponse
    Contains the response to a successful <a>ListSSHPublicKeys</a> request.
    """
    
    is_truncated: Optional[bool] = field(default=None)
    marker: Optional[str] = field(default=None)
    ssh_public_keys: Optional[List[SSHPublicKeyMetadata]] = field(default=None)
    
