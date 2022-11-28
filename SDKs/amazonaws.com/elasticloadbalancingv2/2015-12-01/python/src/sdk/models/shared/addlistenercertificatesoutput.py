from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class AddListenerCertificatesOutput:
    certificates: Optional[List[Certificate]] = field(default=None)
    
