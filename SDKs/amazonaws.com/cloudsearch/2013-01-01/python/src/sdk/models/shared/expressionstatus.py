from dataclasses import dataclass, field
from . import *


@dataclass
class ExpressionStatus:
    r"""ExpressionStatus
    The value of an <code>Expression</code> and its current status.
    """
    
    options: Expression = field()
    status: OptionStatus = field()
    
