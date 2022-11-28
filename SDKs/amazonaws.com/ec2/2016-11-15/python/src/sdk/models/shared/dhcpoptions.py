from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DhcpOptions:
    r"""DhcpOptions
    Describes a set of DHCP options.
    """
    
    dhcp_configurations: Optional[List[DhcpConfiguration]] = field(default=None)
    dhcp_options_id: Optional[str] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
