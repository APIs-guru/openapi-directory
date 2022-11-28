from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Cipher:
    r"""Cipher
    Information about a cipher used in a policy.
    """
    
    name: Optional[str] = field(default=None)
    priority: Optional[int] = field(default=None)
    
