from dataclasses import dataclass, field
from typing import Optional


@dataclass
class LaunchTemplateEnclaveOptions:
    r"""LaunchTemplateEnclaveOptions
    Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.
    """
    
    enabled: Optional[bool] = field(default=None)
    
