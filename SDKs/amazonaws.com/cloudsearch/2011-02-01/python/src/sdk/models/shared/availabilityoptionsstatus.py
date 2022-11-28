from dataclasses import dataclass, field
from . import *


@dataclass
class AvailabilityOptionsStatus:
    r"""AvailabilityOptionsStatus
    The status and configuration of the domain's availability options.
    """
    
    options: bool = field()
    status: OptionStatus = field()
    
