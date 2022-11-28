from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteAppsAppIDQueuesQueueIDPathParams:
    app_id: str = field(metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    queue_id: str = field(metadata={'path_param': { 'field_name': 'queue_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAppsAppIDQueuesQueueIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteAppsAppIDQueuesQueueIDRequest:
    path_params: DeleteAppsAppIDQueuesQueueIDPathParams = field()
    security: DeleteAppsAppIDQueuesQueueIDSecurity = field()
    

@dataclass
class DeleteAppsAppIDQueuesQueueIDResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    
