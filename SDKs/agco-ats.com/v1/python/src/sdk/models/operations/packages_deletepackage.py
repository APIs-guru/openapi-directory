from dataclasses import dataclass, field



@dataclass
class PackagesDeletePackagePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PackagesDeletePackageRequest:
    path_params: PackagesDeletePackagePathParams = field(default=None)
    

@dataclass
class PackagesDeletePackageResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
