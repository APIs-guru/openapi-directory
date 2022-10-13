from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAppsAppIDQueuesPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAppsAppIDQueuesSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostAppsAppIDQueuesRequest:
    path_params: PostAppsAppIDQueuesPathParams = field(default=None)
    request: Optional[shared.Queue] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostAppsAppIDQueuesSecurity = field(default=None)
    

@dataclass
class PostAppsAppIDQueuesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    queue_response: Optional[shared.QueueResponse] = field(default=None)
    
