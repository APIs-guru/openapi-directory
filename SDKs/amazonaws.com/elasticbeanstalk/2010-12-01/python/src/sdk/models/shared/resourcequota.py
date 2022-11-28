from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ResourceQuota:
    r"""ResourceQuota
    The AWS Elastic Beanstalk quota information for a single resource type in an AWS account. It reflects the resource's limits for this account.
    """
    
    maximum: Optional[int] = field(default=None)
    
