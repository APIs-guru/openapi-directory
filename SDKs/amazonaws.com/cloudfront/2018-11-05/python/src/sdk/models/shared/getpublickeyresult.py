from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class GetPublicKeyResult:
    public_key: Optional[PublicKey] = field(default=None)
    
