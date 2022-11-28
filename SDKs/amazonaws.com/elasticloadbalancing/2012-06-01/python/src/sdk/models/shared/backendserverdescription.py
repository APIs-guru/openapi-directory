from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class BackendServerDescription:
    r"""BackendServerDescription
    Information about the configuration of an EC2 instance.
    """
    
    instance_port: Optional[int] = field(default=None)
    policy_names: Optional[List[str]] = field(default=None)
    
