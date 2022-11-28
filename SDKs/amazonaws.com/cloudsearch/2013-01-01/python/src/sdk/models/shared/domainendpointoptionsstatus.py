from dataclasses import dataclass, field
from . import *


@dataclass
class DomainEndpointOptionsStatus:
    r"""DomainEndpointOptionsStatus
    The configuration and status of the domain's endpoint options.
    """
    
    options: DomainEndpointOptions = field()
    status: OptionStatus = field()
    
