from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreatePublicKeyResult:
    public_key: Optional[PublicKey] = field(default=None)
    
