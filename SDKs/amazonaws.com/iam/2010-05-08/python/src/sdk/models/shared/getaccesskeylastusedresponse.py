from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class GetAccessKeyLastUsedResponse:
    r"""GetAccessKeyLastUsedResponse
    Contains the response to a successful <a>GetAccessKeyLastUsed</a> request. It is also returned as a member of the <a>AccessKeyMetaData</a> structure returned by the <a>ListAccessKeys</a> action.
    """
    
    access_key_last_used: Optional[AccessKeyLastUsed] = field(default=None)
    user_name: Optional[str] = field(default=None)
    
