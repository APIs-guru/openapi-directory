from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ListServerCertificatesResponse:
    r"""ListServerCertificatesResponse
    Contains the response to a successful <a>ListServerCertificates</a> request. 
    """
    
    server_certificate_metadata_list: List[ServerCertificateMetadata] = field()
    is_truncated: Optional[bool] = field(default=None)
    marker: Optional[str] = field(default=None)
    
