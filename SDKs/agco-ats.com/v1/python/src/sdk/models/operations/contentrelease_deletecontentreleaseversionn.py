from dataclasses import dataclass, field



@dataclass
class ContentReleaseDeleteContentReleaseVersionnPathParams:
    content_release_id: int = field(default=None, metadata={'path_param': { 'field_name': 'ContentReleaseId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentReleaseDeleteContentReleaseVersionnRequest:
    path_params: ContentReleaseDeleteContentReleaseVersionnPathParams = field(default=None)
    

@dataclass
class ContentReleaseDeleteContentReleaseVersionnResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
