from dataclasses import dataclass, field



@dataclass
class PackageTypesAddPackageTypeUserPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    user_id: int = field(default=None, metadata={'path_param': { 'field_name': 'userID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PackageTypesAddPackageTypeUserRequest:
    path_params: PackageTypesAddPackageTypeUserPathParams = field(default=None)
    

@dataclass
class PackageTypesAddPackageTypeUserResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
