from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Instance:
    r"""Instance
    The description of an Amazon EC2 instance.
    """
    
    id: Optional[str] = field(default=None)
    
