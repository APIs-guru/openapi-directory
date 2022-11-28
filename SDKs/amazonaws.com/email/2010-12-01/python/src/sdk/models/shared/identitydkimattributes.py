from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class IdentityDkimAttributes:
    r"""IdentityDkimAttributes
    Represents the DKIM attributes of a verified email address or a domain.
    """
    
    dkim_enabled: bool = field()
    dkim_verification_status: VerificationStatusEnum = field()
    dkim_tokens: Optional[List[str]] = field(default=None)
    
