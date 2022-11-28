from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Instance:
    r"""Instance
    The ID of an EC2 instance.
    """
    
    instance_id: Optional[str] = field(default=None)
    
