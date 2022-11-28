from dataclasses import dataclass, field
from typing import Optional


@dataclass
class MissingCustomsException:
    r"""MissingCustomsException
    One or more required customs parameters was missing from the manifest.
    """
    
    message: Optional[str] = field(default=None)
    
