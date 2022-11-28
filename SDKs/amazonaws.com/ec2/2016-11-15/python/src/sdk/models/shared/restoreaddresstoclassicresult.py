from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class RestoreAddressToClassicResult:
    public_ip: Optional[str] = field(default=None)
    status: Optional[StatusEnum] = field(default=None)
    
