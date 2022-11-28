from dataclasses import dataclass, field
from . import *


@dataclass
class RankExpressionStatus:
    r"""RankExpressionStatus
    The value of a <code>RankExpression</code> and its current status.
    """
    
    options: NamedRankExpression = field()
    status: OptionStatus = field()
    
