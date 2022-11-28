from dataclasses import dataclass, field
from . import *


@dataclass
class GetServerCertificateResponse:
    r"""GetServerCertificateResponse
    Contains the response to a successful <a>GetServerCertificate</a> request. 
    """
    
    server_certificate: ServerCertificate = field()
    
