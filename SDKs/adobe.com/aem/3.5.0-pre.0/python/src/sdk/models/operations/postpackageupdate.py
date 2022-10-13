from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostPackageUpdateQueryParams:
    charset_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': '_charset_', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    group_name: str = field(default=None, metadata={'query_param': { 'field_name': 'groupName', 'style': 'form', 'explode': True }})
    package_name: str = field(default=None, metadata={'query_param': { 'field_name': 'packageName', 'style': 'form', 'explode': True }})
    path: str = field(default=None, metadata={'query_param': { 'field_name': 'path', 'style': 'form', 'explode': True }})
    version: str = field(default=None, metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    

@dataclass
class PostPackageUpdateRequest:
    query_params: PostPackageUpdateQueryParams = field(default=None)
    

@dataclass
class PostPackageUpdateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    post_package_update_default_application_json_string: Optional[str] = field(default=None)
    
