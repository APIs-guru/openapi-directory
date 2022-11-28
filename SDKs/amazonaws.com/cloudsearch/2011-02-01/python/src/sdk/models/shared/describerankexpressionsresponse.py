from dataclasses import dataclass, field
from typing import List
from . import *


@dataclass
class DescribeRankExpressionsResponse:
    r"""DescribeRankExpressionsResponse
    A response message that contains the rank expressions for a search domain.
    """
    
    rank_expressions: List[RankExpressionStatus] = field()
    
