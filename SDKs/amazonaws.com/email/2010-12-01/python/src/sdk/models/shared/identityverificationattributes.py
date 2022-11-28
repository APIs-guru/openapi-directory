from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class IdentityVerificationAttributes:
    r"""IdentityVerificationAttributes
    Represents the verification attributes of a single identity.
    """
    
    verification_status: VerificationStatusEnum = field()
    verification_token: Optional[str] = field(default=None)
    
