from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InvalidForwardCookies:
    r"""InvalidForwardCookies
    Your request contains forward cookies option which doesn't match with the expectation for the <code>whitelisted</code> list of cookie names. Either list of cookie names has been specified when not allowed or list of cookie names is missing when expected.
    """
    
    message: Optional[str] = field(default=None)
    
