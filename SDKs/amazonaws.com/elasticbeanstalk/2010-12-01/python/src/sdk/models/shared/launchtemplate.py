from dataclasses import dataclass, field
from typing import Optional


@dataclass
class LaunchTemplate:
    r"""LaunchTemplate
    Describes an Amazon EC2 launch template.
    """
    
    id: Optional[str] = field(default=None)
    
