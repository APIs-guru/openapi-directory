from dataclasses import dataclass, field
from . import *


@dataclass
class DeleteRankExpressionResponse:
    r"""DeleteRankExpressionResponse
    A response message that contains the status of a deleted <code>RankExpression</code>.
    """
    
    rank_expression: RankExpressionStatus = field()
    
