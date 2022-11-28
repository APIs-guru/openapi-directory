from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class ClientCertificateRevocationListStatus:
    r"""ClientCertificateRevocationListStatus
    Describes the state of a client certificate revocation list.
    """
    
    code: Optional[ClientCertificateRevocationListStatusCodeEnum] = field(default=None)
    message: Optional[str] = field(default=None)
    
