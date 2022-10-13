from dataclasses import dataclass, field



@dataclass
class PriorityPackagesDeletePriorityPackagesPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PriorityPackagesDeletePriorityPackagesRequest:
    path_params: PriorityPackagesDeletePriorityPackagesPathParams = field(default=None)
    

@dataclass
class PriorityPackagesDeletePriorityPackagesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
