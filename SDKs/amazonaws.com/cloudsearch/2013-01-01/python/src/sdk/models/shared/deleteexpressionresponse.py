from dataclasses import dataclass, field
from . import *


@dataclass
class DeleteExpressionResponse:
    r"""DeleteExpressionResponse
    The result of a <code><a>DeleteExpression</a></code> request. Specifies the expression being deleted.
    """
    
    expression: ExpressionStatus = field()
    
