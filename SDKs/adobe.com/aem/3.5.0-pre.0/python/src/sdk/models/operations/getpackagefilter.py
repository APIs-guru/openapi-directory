from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetPackageFilterPathParams:
    group: str = field(metadata={'path_param': { 'field_name': 'group', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    version: str = field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPackageFilterRequest:
    path_params: GetPackageFilterPathParams = field()
    

@dataclass
class GetPackageFilterResponse:
    content_type: str = field()
    status_code: int = field()
    get_package_filter_default_application_json_string: Optional[str] = field(default=None)
    
