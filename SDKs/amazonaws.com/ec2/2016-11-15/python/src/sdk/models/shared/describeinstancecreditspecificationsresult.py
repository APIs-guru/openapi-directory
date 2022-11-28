from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeInstanceCreditSpecificationsResult:
    instance_credit_specifications: Optional[List[InstanceCreditSpecification]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
