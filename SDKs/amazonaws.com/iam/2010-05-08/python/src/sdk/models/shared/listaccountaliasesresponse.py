from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ListAccountAliasesResponse:
    r"""ListAccountAliasesResponse
    Contains the response to a successful <a>ListAccountAliases</a> request. 
    """
    
    account_aliases: List[str] = field()
    is_truncated: Optional[bool] = field(default=None)
    marker: Optional[str] = field(default=None)
    
