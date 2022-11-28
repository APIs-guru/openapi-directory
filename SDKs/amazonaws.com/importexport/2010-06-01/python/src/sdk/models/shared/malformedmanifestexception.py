from dataclasses import dataclass, field
from typing import Optional


@dataclass
class MalformedManifestException:
    r"""MalformedManifestException
    Your manifest is not well-formed.
    """
    
    message: Optional[str] = field(default=None)
    
