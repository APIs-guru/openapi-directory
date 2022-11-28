from dataclasses import dataclass, field
from typing import Optional


@dataclass
class LaunchTemplateHibernationOptions:
    r"""LaunchTemplateHibernationOptions
    Indicates whether an instance is configured for hibernation.
    """
    
    configured: Optional[bool] = field(default=None)
    
