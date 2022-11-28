from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PlatformFramework:
    r"""PlatformFramework
    A framework supported by the platform.
    """
    
    name: Optional[str] = field(default=None)
    version: Optional[str] = field(default=None)
    
