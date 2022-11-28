from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetHealthCheckResponse:
    content_type: str = field()
    status_code: int = field()
    health_check_read: Optional[shared.HealthCheckRead] = field(default=None)
    
