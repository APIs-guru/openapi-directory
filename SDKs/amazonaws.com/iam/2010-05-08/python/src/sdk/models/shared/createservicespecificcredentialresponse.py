from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateServiceSpecificCredentialResponse:
    service_specific_credential: Optional[ServiceSpecificCredential] = field(default=None)
    
