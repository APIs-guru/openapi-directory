from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class PostPackageUpdateQueryParams:
    group_name: str = field(metadata={'query_param': { 'field_name': 'groupName', 'style': 'form', 'explode': True }})
    package_name: str = field(metadata={'query_param': { 'field_name': 'packageName', 'style': 'form', 'explode': True }})
    path: str = field(metadata={'query_param': { 'field_name': 'path', 'style': 'form', 'explode': True }})
    version: str = field(metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    charset_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': '_charset_', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclass
class PostPackageUpdateRequest:
    query_params: PostPackageUpdateQueryParams = field()
    

@dataclass
class PostPackageUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    post_package_update_default_application_json_string: Optional[str] = field(default=None)
    
