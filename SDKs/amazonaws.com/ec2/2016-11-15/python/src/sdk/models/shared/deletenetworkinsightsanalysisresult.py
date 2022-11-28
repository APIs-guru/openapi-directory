from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteNetworkInsightsAnalysisResult:
    network_insights_analysis_id: Optional[str] = field(default=None)
    
