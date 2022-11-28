from dataclasses import dataclass, field
from typing import List
from . import *


@dataclass
class DescribeExpressionsResponse:
    r"""DescribeExpressionsResponse
    The result of a <code>DescribeExpressions</code> request. Contains the expressions configured for the domain specified in the request.
    """
    
    expressions: List[ExpressionStatus] = field()
    
