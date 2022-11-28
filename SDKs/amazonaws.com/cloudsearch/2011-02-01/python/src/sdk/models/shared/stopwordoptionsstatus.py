from dataclasses import dataclass, field
from . import *


@dataclass
class StopwordOptionsStatus:
    r"""StopwordOptionsStatus
    The stopword options configured for this search domain and the current status of those options.
    """
    
    options: str = field()
    status: OptionStatus = field()
    
