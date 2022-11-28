from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateDhcpOptionsResult:
    dhcp_options: Optional[DhcpOptions] = field(default=None)
    
