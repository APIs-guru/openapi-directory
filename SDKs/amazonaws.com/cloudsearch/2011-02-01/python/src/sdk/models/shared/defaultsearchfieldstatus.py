from dataclasses import dataclass, field
from . import *


@dataclass
class DefaultSearchFieldStatus:
    r"""DefaultSearchFieldStatus
    The value of the <code>DefaultSearchField</code> configured for this search domain and its current status.
    """
    
    options: str = field()
    status: OptionStatus = field()
    
