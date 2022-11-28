from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ListReceiptRuleSetsResponse:
    r"""ListReceiptRuleSetsResponse
    A list of receipt rule sets that exist under your AWS account.
    """
    
    next_token: Optional[str] = field(default=None)
    rule_sets: Optional[List[ReceiptRuleSetMetadata]] = field(default=None)
    
