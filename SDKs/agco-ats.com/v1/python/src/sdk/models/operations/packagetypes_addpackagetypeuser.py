from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PackageTypesAddPackageTypeUserPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    user_id: int = field(metadata={'path_param': { 'field_name': 'userID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PackageTypesAddPackageTypeUserRequest:
    path_params: PackageTypesAddPackageTypeUserPathParams = field()
    

@dataclass
class PackageTypesAddPackageTypeUserResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
