from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetContextKeysForPolicyResponse:
    r"""GetContextKeysForPolicyResponse
    Contains the response to a successful <a>GetContextKeysForPrincipalPolicy</a> or <a>GetContextKeysForCustomPolicy</a> request. 
    """
    
    context_key_names: Optional[List[str]] = field(default=None)
    
