from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ExportClientVpnClientCertificateRevocationListResult:
    certificate_revocation_list: Optional[str] = field(default=None)
    status: Optional[ClientCertificateRevocationListStatus] = field(default=None)
    
