from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ContentReleaseDeleteContentReleaseVersionnPathParams:
    content_release_id: int = field(metadata={'path_param': { 'field_name': 'ContentReleaseId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentReleaseDeleteContentReleaseVersionnRequest:
    path_params: ContentReleaseDeleteContentReleaseVersionnPathParams = field()
    

@dataclass
class ContentReleaseDeleteContentReleaseVersionnResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
