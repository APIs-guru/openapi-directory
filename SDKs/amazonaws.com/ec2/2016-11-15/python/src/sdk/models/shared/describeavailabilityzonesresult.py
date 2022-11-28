from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeAvailabilityZonesResult:
    availability_zones: Optional[List[AvailabilityZone]] = field(default=None)
    
