from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ResetAddressAttributeResult:
    address: Optional[AddressAttribute] = field(default=None)
    
