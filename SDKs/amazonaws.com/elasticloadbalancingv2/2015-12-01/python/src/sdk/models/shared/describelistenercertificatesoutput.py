from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeListenerCertificatesOutput:
    certificates: Optional[List[Certificate]] = field(default=None)
    next_marker: Optional[str] = field(default=None)
    
