from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeReceiptRuleSetResponse:
    r"""DescribeReceiptRuleSetResponse
    Represents the details of the specified receipt rule set.
    """
    
    metadata: Optional[ReceiptRuleSetMetadata] = field(default=None)
    rules: Optional[List[ReceiptRule]] = field(default=None)
    
