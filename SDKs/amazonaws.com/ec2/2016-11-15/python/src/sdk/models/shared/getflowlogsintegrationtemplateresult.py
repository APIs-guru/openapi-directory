from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetFlowLogsIntegrationTemplateResult:
    result: Optional[str] = field(default=None)
    
