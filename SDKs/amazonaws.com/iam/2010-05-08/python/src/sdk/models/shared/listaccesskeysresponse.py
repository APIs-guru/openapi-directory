from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ListAccessKeysResponse:
    r"""ListAccessKeysResponse
    Contains the response to a successful <a>ListAccessKeys</a> request. 
    """
    
    access_key_metadata: List[AccessKeyMetadata] = field()
    is_truncated: Optional[bool] = field(default=None)
    marker: Optional[str] = field(default=None)
    
