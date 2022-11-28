from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InvalidAccessKeyIDException:
    r"""InvalidAccessKeyIDException
    The AWS Access Key ID specified in the request did not match the manifest's accessKeyId value. The manifest and the request authentication must use the same AWS Access Key ID.
    """
    
    message: Optional[str] = field(default=None)
    
