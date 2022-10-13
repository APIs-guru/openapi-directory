from dataclasses import dataclass, field



@dataclass
class PostConfigPropertyPathParams:
    config_node_name: str = field(default=None, metadata={'path_param': { 'field_name': 'configNodeName', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostConfigPropertyRequest:
    path_params: PostConfigPropertyPathParams = field(default=None)
    

@dataclass
class PostConfigPropertyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
