from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ModifyAddressAttributeResult:
    address: Optional[AddressAttribute] = field(default=None)
    
