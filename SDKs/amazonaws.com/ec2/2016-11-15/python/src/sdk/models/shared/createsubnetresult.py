from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateSubnetResult:
    subnet: Optional[Subnet] = field(default=None)
    
