from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class SetIPAddressTypeOutput:
    ip_address_type: Optional[IPAddressTypeEnum] = field(default=None)
    
