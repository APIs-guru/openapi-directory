from dataclasses import dataclass, field
from . import *


@dataclass
class SuggesterStatus:
    r"""SuggesterStatus
    The value of a <code>Suggester</code> and its current status.
    """
    
    options: Suggester = field()
    status: OptionStatus = field()
    
