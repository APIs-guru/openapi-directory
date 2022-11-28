from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DhcpConfiguration:
    r"""DhcpConfiguration
    Describes a DHCP configuration option.
    """
    
    key: Optional[str] = field(default=None)
    values: Optional[List[AttributeValue]] = field(default=None)
    
