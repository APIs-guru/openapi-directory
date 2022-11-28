from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InvalidOrigin:
    r"""InvalidOrigin
    The Amazon S3 origin server specified does not refer to a valid Amazon S3 bucket.
    """
    
    message: Optional[str] = field(default=None)
    
