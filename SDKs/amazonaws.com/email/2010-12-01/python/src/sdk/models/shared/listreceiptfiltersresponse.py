from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ListReceiptFiltersResponse:
    r"""ListReceiptFiltersResponse
    A list of IP address filters that exist under your AWS account.
    """
    
    filters: Optional[List[ReceiptFilter]] = field(default=None)
    
