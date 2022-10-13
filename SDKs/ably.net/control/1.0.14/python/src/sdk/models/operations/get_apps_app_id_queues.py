from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAppsAppIDQueuesPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAppsAppIDQueuesSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAppsAppIDQueuesRequest:
    path_params: GetAppsAppIDQueuesPathParams = field(default=None)
    security: GetAppsAppIDQueuesSecurity = field(default=None)
    

@dataclass
class GetAppsAppIDQueuesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    queue_responses: Optional[List[shared.QueueResponse]] = field(default=None)
    
