from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateDefaultVpcResult:
    vpc: Optional[Vpc] = field(default=None)
    
