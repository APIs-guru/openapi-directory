from dataclasses import dataclass, field



@dataclass
class SignUpdatePathParams:
    job: str = field(default=None, metadata={'path_param': { 'field_name': 'job', 'style': 'simple', 'explode': False }})
    

@dataclass
class SignUpdateRequest:
    path_params: SignUpdatePathParams = field(default=None)
    

@dataclass
class SignUpdateResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
