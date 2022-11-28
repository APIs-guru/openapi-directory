from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateServiceLinkedRoleResponse:
    role: Optional[Role] = field(default=None)
    
