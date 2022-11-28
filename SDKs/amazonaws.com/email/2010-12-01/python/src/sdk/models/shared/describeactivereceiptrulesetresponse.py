from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeActiveReceiptRuleSetResponse:
    r"""DescribeActiveReceiptRuleSetResponse
    Represents the metadata and receipt rules for the receipt rule set that is currently active.
    """
    
    metadata: Optional[ReceiptRuleSetMetadata] = field(default=None)
    rules: Optional[List[ReceiptRule]] = field(default=None)
    
