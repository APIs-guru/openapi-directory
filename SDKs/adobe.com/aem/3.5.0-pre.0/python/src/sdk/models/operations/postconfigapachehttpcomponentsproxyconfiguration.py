from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class PostConfigApacheHTTPComponentsProxyConfigurationQueryParams:
    proxy_enabled: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'proxy.enabled', 'style': 'form', 'explode': True }})
    proxy_enabled_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'proxy.enabled@TypeHint', 'style': 'form', 'explode': True }})
    proxy_exceptions: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'proxy.exceptions', 'style': 'form', 'explode': True }})
    proxy_exceptions_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'proxy.exceptions@TypeHint', 'style': 'form', 'explode': True }})
    proxy_host: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'proxy.host', 'style': 'form', 'explode': True }})
    proxy_host_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'proxy.host@TypeHint', 'style': 'form', 'explode': True }})
    proxy_password: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'proxy.password', 'style': 'form', 'explode': True }})
    proxy_password_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'proxy.password@TypeHint', 'style': 'form', 'explode': True }})
    proxy_port: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'proxy.port', 'style': 'form', 'explode': True }})
    proxy_port_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'proxy.port@TypeHint', 'style': 'form', 'explode': True }})
    proxy_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'proxy.user', 'style': 'form', 'explode': True }})
    proxy_user_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'proxy.user@TypeHint', 'style': 'form', 'explode': True }})
    

@dataclass
class PostConfigApacheHTTPComponentsProxyConfigurationRequest:
    query_params: PostConfigApacheHTTPComponentsProxyConfigurationQueryParams = field(default=None)
    

@dataclass
class PostConfigApacheHTTPComponentsProxyConfigurationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
