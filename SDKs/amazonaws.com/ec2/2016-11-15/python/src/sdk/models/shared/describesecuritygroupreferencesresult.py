from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeSecurityGroupReferencesResult:
    security_group_reference_set: Optional[List[SecurityGroupReference]] = field(default=None)
    
