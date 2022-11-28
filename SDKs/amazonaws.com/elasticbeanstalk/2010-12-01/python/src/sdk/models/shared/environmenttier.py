from dataclasses import dataclass, field
from typing import Optional


@dataclass
class EnvironmentTier:
    r"""EnvironmentTier
    Describes the properties of an environment tier
    """
    
    name: Optional[str] = field(default=None)
    type: Optional[str] = field(default=None)
    version: Optional[str] = field(default=None)
    
