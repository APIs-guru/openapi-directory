from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateDefaultSubnetResult:
    subnet: Optional[Subnet] = field(default=None)
    
