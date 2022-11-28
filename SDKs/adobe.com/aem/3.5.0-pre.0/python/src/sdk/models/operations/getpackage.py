from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetPackagePathParams:
    group: str = field(metadata={'path_param': { 'field_name': 'group', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    version: str = field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPackageRequest:
    path_params: GetPackagePathParams = field()
    

@dataclass
class GetPackageResponse:
    content_type: str = field()
    status_code: int = field()
    get_package_default_application_octet_stream_binary_string: Optional[bytes] = field(default=None)
    
