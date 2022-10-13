from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetPackagePathParams:
    group: str = field(default=None, metadata={'path_param': { 'field_name': 'group', 'style': 'simple', 'explode': False }})
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    version: str = field(default=None, metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPackageRequest:
    path_params: GetPackagePathParams = field(default=None)
    

@dataclass
class GetPackageResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_package_default_application_octet_stream_binary_string: Optional[bytes] = field(default=None)
    
