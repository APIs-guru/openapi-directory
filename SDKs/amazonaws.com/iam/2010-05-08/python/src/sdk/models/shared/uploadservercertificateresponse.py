from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class UploadServerCertificateResponse:
    r"""UploadServerCertificateResponse
    Contains the response to a successful <a>UploadServerCertificate</a> request. 
    """
    
    server_certificate_metadata: Optional[ServerCertificateMetadata] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
