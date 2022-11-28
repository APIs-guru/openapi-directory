from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAccountSummaryResponse:
    r"""GetAccountSummaryResponse
    Contains the response to a successful <a>GetAccountSummary</a> request. 
    """
    
    summary_map: Optional[dict[str, int]] = field(default=None)
    
