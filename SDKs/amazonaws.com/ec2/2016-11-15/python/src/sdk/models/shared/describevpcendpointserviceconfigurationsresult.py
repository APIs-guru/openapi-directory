from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeVpcEndpointServiceConfigurationsResult:
    next_token: Optional[str] = field(default=None)
    service_configurations: Optional[List[ServiceConfiguration]] = field(default=None)
    
