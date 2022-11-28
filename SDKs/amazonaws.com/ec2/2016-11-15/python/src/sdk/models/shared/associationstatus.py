from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class AssociationStatus:
    r"""AssociationStatus
    Describes the state of a target network association.
    """
    
    code: Optional[AssociationStatusCodeEnum] = field(default=None)
    message: Optional[str] = field(default=None)
    
