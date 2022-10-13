from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostConfigApacheSlingGetServletQueryParams:
    enable_html: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enable.html', 'style': 'form', 'explode': True }})
    enable_html_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'enable.html@TypeHint', 'style': 'form', 'explode': True }})
    enable_txt: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enable.txt', 'style': 'form', 'explode': True }})
    enable_txt_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'enable.txt@TypeHint', 'style': 'form', 'explode': True }})
    enable_xml: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enable.xml', 'style': 'form', 'explode': True }})
    enable_xml_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'enable.xml@TypeHint', 'style': 'form', 'explode': True }})
    json_maximumresults: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'json.maximumresults', 'style': 'form', 'explode': True }})
    json_maximumresults_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'json.maximumresults@TypeHint', 'style': 'form', 'explode': True }})
    

@dataclass
class PostConfigApacheSlingGetServletRequest:
    query_params: PostConfigApacheSlingGetServletQueryParams = field(default=None)
    

@dataclass
class PostConfigApacheSlingGetServletResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
