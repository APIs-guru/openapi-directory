from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DescribeReceiptRuleResponse:
    r"""DescribeReceiptRuleResponse
    Represents the details of a receipt rule.
    """
    
    rule: Optional[ReceiptRule] = field(default=None)
    
