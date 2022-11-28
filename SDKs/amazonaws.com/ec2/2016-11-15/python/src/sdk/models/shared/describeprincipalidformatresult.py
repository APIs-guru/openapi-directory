from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribePrincipalIDFormatResult:
    next_token: Optional[str] = field(default=None)
    principals: Optional[List[PrincipalIDFormat]] = field(default=None)
    
