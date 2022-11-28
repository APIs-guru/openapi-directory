from dataclasses import dataclass, field
from typing import Optional


@dataclass
class HostInstance:
    r"""HostInstance
    Describes an instance running on a Dedicated Host.
    """
    
    instance_id: Optional[str] = field(default=None)
    instance_type: Optional[str] = field(default=None)
    owner_id: Optional[str] = field(default=None)
    
