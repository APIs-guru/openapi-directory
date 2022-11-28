from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateVpcResult:
    vpc: Optional[Vpc] = field(default=None)
    
