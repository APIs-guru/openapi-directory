from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ListIdentitiesResponse:
    r"""ListIdentitiesResponse
    A list of all identities that you have attempted to verify under your AWS account, regardless of verification status.
    """
    
    identities: List[str] = field()
    next_token: Optional[str] = field(default=None)
    
