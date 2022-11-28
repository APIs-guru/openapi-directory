from dataclasses import dataclass, field
from . import *


@dataclass
class DefineExpressionResponse:
    r"""DefineExpressionResponse
    The result of a <code>DefineExpression</code> request. Contains the status of the newly-configured expression.
    """
    
    expression: ExpressionStatus = field()
    
