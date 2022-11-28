from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PackageTypesDeletePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PackageTypesDeleteRequest:
    path_params: PackageTypesDeletePathParams = field()
    

@dataclass
class PackageTypesDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
