from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TooManyCloudFrontOriginAccessIdentities:
    r"""TooManyCloudFrontOriginAccessIdentities
    Processing your request would cause you to exceed the maximum number of origin access identities allowed.
    """
    
    message: Optional[str] = field(default=None)
    
