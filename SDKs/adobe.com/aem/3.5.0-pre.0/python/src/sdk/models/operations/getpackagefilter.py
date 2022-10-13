from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetPackageFilterPathParams:
    group: str = field(default=None, metadata={'path_param': { 'field_name': 'group', 'style': 'simple', 'explode': False }})
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    version: str = field(default=None, metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPackageFilterRequest:
    path_params: GetPackageFilterPathParams = field(default=None)
    

@dataclass
class GetPackageFilterResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_package_filter_default_application_json_string: Optional[str] = field(default=None)
    
