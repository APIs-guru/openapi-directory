from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PackagesDeletePackagePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PackagesDeletePackageRequest:
    path_params: PackagesDeletePackagePathParams = field()
    

@dataclass
class PackagesDeletePackageResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
