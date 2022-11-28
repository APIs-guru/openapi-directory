from dataclasses import dataclass, field
from typing import Optional


@dataclass
class OrganizationsDecisionDetail:
    r"""OrganizationsDecisionDetail
    Contains information about the effect that Organizations has on a policy simulation.
    """
    
    allowed_by_organizations: Optional[bool] = field(default=None)
    
