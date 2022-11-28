from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ServerCertificate:
    r"""ServerCertificate
    <p>Contains information about a server certificate.</p> <p> This data type is used as a response element in the <a>GetServerCertificate</a> operation. </p>
    """
    
    certificate_body: str = field()
    server_certificate_metadata: ServerCertificateMetadata = field()
    certificate_chain: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
