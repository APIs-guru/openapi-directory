from dataclasses import dataclass, field



@dataclass
class HeadKeyPkPathParams:
    pk: str = field(default=None, metadata={'path_param': { 'field_name': 'PK', 'style': 'simple', 'explode': False }})
    

@dataclass
class HeadKeyPkRequest:
    path_params: HeadKeyPkPathParams = field(default=None)
    

@dataclass
class HeadKeyPkResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
