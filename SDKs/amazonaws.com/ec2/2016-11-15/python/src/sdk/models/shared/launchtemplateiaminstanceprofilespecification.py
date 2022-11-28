from dataclasses import dataclass, field
from typing import Optional


@dataclass
class LaunchTemplateIamInstanceProfileSpecification:
    r"""LaunchTemplateIamInstanceProfileSpecification
    Describes an IAM instance profile.
    """
    
    arn: Optional[str] = field(default=None)
    name: Optional[str] = field(default=None)
    
