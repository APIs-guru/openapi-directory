from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteAppsAppIDQueuesQueueIDPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    queue_id: str = field(default=None, metadata={'path_param': { 'field_name': 'queue_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAppsAppIDQueuesQueueIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteAppsAppIDQueuesQueueIDRequest:
    path_params: DeleteAppsAppIDQueuesQueueIDPathParams = field(default=None)
    security: DeleteAppsAppIDQueuesQueueIDSecurity = field(default=None)
    

@dataclass
class DeleteAppsAppIDQueuesQueueIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
