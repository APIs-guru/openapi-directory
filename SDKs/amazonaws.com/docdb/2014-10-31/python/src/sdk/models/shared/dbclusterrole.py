from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DbClusterRole:
    r"""DbClusterRole
    Describes an Identity and Access Management (IAM) role that is associated with a cluster.
    """
    
    role_arn: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    
