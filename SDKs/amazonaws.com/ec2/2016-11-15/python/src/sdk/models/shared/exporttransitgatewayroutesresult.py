from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ExportTransitGatewayRoutesResult:
    s3_location: Optional[str] = field(default=None)
    
