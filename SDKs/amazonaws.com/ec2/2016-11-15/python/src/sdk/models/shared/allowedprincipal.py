from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class AllowedPrincipal:
    r"""AllowedPrincipal
    Describes a principal.
    """
    
    principal: Optional[str] = field(default=None)
    principal_type: Optional[PrincipalTypeEnum] = field(default=None)
    
