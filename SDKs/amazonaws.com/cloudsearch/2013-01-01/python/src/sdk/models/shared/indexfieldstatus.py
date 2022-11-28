from dataclasses import dataclass, field
from . import *


@dataclass
class IndexFieldStatus:
    r"""IndexFieldStatus
    The value of an <code>IndexField</code> and its current status.
    """
    
    options: IndexField = field()
    status: OptionStatus = field()
    
