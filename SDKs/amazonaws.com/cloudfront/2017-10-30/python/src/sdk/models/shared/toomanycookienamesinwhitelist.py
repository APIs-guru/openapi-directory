from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TooManyCookieNamesInWhiteList:
    r"""TooManyCookieNamesInWhiteList
    Your request contains more cookie names in the whitelist than are allowed per cache behavior.
    """
    
    message: Optional[str] = field(default=None)
    
