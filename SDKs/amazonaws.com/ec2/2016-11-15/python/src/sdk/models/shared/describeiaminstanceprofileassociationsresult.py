from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeIamInstanceProfileAssociationsResult:
    iam_instance_profile_associations: Optional[List[IamInstanceProfileAssociation]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
