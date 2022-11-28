from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ModifyHostsResult:
    successful: Optional[List[str]] = field(default=None)
    unsuccessful: Optional[List[UnsuccessfulItem]] = field(default=None)
    
