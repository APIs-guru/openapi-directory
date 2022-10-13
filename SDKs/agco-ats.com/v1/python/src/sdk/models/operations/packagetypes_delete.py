from dataclasses import dataclass, field



@dataclass
class PackageTypesDeletePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PackageTypesDeleteRequest:
    path_params: PackageTypesDeletePathParams = field(default=None)
    

@dataclass
class PackageTypesDeleteResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
