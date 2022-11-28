from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class StartNetworkInsightsAnalysisResult:
    network_insights_analysis: Optional[NetworkInsightsAnalysis] = field(default=None)
    
