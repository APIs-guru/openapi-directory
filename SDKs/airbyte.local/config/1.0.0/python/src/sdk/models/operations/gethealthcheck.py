from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetHealthCheckResponse:
    content_type: str = field(default=None)
    health_check_read: Optional[shared.HealthCheckRead] = field(default=None)
    status_code: int = field(default=None)
    
