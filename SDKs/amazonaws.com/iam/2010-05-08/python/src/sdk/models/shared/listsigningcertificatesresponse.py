from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ListSigningCertificatesResponse:
    r"""ListSigningCertificatesResponse
    Contains the response to a successful <a>ListSigningCertificates</a> request. 
    """
    
    certificates: List[SigningCertificate] = field()
    is_truncated: Optional[bool] = field(default=None)
    marker: Optional[str] = field(default=None)
    
