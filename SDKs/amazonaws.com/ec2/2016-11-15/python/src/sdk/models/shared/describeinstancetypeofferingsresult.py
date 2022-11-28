from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeInstanceTypeOfferingsResult:
    instance_type_offerings: Optional[List[InstanceTypeOffering]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
