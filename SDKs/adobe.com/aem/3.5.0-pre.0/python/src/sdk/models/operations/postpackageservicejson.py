from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostPackageServiceJSONPathParams:
    path: str = field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPackageServiceJSONQueryParams:
    cmd: str = field(metadata={'query_param': { 'field_name': 'cmd', 'style': 'form', 'explode': True }})
    charset_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': '_charset_', 'style': 'form', 'explode': True }})
    force: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'force', 'style': 'form', 'explode': True }})
    group_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'groupName', 'style': 'form', 'explode': True }})
    package_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'packageName', 'style': 'form', 'explode': True }})
    package_version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'packageVersion', 'style': 'form', 'explode': True }})
    recursive: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'recursive', 'style': 'form', 'explode': True }})
    

@dataclass
class PostPackageServiceJSONRequestBodyPackage:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    package: str = field(metadata={'multipart_form': { 'field_name': 'package' }})
    

@dataclass
class PostPackageServiceJSONRequestBody:
    package: Optional[PostPackageServiceJSONRequestBodyPackage] = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class PostPackageServiceJSONRequest:
    path_params: PostPackageServiceJSONPathParams = field()
    query_params: PostPackageServiceJSONQueryParams = field()
    request: Optional[PostPackageServiceJSONRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostPackageServiceJSONResponse:
    content_type: str = field()
    status_code: int = field()
    post_package_service_json_default_application_json_string: Optional[str] = field(default=None)
    
