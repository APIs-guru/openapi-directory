from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from . import *


@dataclass
class DefineRankExpressionResponse:
    r"""DefineRankExpressionResponse
    A response message that contains the status of an updated <code>RankExpression</code>.
    """
    
    rank_expression: RankExpressionStatus = field()
    
