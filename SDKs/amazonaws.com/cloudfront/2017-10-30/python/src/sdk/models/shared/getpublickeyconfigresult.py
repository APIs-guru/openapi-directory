from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class GetPublicKeyConfigResult:
    public_key_config: Optional[PublicKeyConfig] = field(default=None)
    
