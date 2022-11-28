from dataclasses import dataclass, field
from typing import Optional


@dataclass
class IamInstanceProfile:
    r"""IamInstanceProfile
    Describes an IAM instance profile.
    """
    
    arn: Optional[str] = field(default=None)
    id: Optional[str] = field(default=None)
    
