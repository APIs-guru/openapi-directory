from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostPackageServiceQueryParams:
    cmd: str = field(default=None, metadata={'query_param': { 'field_name': 'cmd', 'style': 'form', 'explode': True }})
    

@dataclass
class PostPackageServiceRequest:
    query_params: PostPackageServiceQueryParams = field(default=None)
    

@dataclass
class PostPackageServiceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    post_package_service_default_text_xml_string: Optional[str] = field(default=None)
    
