from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DescribeAccountAttributesResult:
    resource_quotas: Optional[ResourceQuotas] = field(default=None)
    
