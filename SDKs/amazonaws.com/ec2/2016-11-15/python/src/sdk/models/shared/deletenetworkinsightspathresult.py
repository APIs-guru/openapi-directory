from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteNetworkInsightsPathResult:
    network_insights_path_id: Optional[str] = field(default=None)
    
