from dataclasses import dataclass, field
from typing import Optional


@dataclass
class LaunchConfiguration:
    r"""LaunchConfiguration
    Describes an Auto Scaling launch configuration.
    """
    
    name: Optional[str] = field(default=None)
    
