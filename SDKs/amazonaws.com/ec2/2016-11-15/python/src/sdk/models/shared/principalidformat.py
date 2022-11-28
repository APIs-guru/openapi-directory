from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class PrincipalIDFormat:
    r"""PrincipalIDFormat
    PrincipalIdFormat description
    """
    
    arn: Optional[str] = field(default=None)
    statuses: Optional[List[IDFormat]] = field(default=None)
    
