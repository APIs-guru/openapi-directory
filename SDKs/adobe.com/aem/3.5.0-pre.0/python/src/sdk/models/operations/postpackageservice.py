from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostPackageServiceQueryParams:
    cmd: str = field(metadata={'query_param': { 'field_name': 'cmd', 'style': 'form', 'explode': True }})
    

@dataclass
class PostPackageServiceRequest:
    query_params: PostPackageServiceQueryParams = field()
    

@dataclass
class PostPackageServiceResponse:
    content_type: str = field()
    status_code: int = field()
    post_package_service_default_text_xml_string: Optional[str] = field(default=None)
    
