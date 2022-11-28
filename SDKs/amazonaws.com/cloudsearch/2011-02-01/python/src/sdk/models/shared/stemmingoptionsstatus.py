from dataclasses import dataclass, field
from . import *


@dataclass
class StemmingOptionsStatus:
    r"""StemmingOptionsStatus
    The stemming options configured for this search domain and the current status of those options.
    """
    
    options: str = field()
    status: OptionStatus = field()
    
