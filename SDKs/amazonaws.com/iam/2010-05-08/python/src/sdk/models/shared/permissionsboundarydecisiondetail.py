from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PermissionsBoundaryDecisionDetail:
    r"""PermissionsBoundaryDecisionDetail
    Contains information about the effect that a permissions boundary has on a policy simulation when the boundary is applied to an IAM entity.
    """
    
    allowed_by_permissions_boundary: Optional[bool] = field(default=None)
    
