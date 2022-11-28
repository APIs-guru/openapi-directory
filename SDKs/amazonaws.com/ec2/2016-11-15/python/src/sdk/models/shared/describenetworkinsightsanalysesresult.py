from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeNetworkInsightsAnalysesResult:
    network_insights_analyses: Optional[List[NetworkInsightsAnalysis]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    
