from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InstanceState:
    r"""InstanceState
    Information about the state of an EC2 instance.
    """
    
    description: Optional[str] = field(default=None)
    instance_id: Optional[str] = field(default=None)
    reason_code: Optional[str] = field(default=None)
    state: Optional[str] = field(default=None)
    
