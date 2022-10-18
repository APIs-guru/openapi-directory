from dataclasses import dataclass, field



@dataclass
class PostPackageServiceQueryParams:
    cmd: str = field(default=None, metadata={'query_param': { 'field_name': 'cmd', 'style': 'form', 'explode': True }})
    

@dataclass
class PostPackageServiceRequest:
    query_params: PostPackageServiceQueryParams = field(default=None)
    

@dataclass
class PostPackageServiceResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
