from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeNetworkInsightsPathsResult:
    network_insights_paths: Optional[List[NetworkInsightsPath]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
