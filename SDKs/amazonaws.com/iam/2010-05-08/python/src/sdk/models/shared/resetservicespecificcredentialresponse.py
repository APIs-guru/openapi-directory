from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ResetServiceSpecificCredentialResponse:
    service_specific_credential: Optional[ServiceSpecificCredential] = field(default=None)
    
