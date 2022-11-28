from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CustomAmi:
    r"""CustomAmi
    A custom AMI available to platforms.
    """
    
    image_id: Optional[str] = field(default=None)
    virtualization_type: Optional[str] = field(default=None)
    
