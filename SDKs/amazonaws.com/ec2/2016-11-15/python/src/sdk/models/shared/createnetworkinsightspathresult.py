from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateNetworkInsightsPathResult:
    network_insights_path: Optional[NetworkInsightsPath] = field(default=None)
    
