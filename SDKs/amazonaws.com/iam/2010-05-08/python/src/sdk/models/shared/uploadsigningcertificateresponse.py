from dataclasses import dataclass, field
from . import *


@dataclass
class UploadSigningCertificateResponse:
    r"""UploadSigningCertificateResponse
    Contains the response to a successful <a>UploadSigningCertificate</a> request. 
    """
    
    certificate: SigningCertificate = field()
    
