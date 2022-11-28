from dataclasses import dataclass, field



@dataclass
class PostConfigPropertyPathParams:
    config_node_name: str = field(metadata={'path_param': { 'field_name': 'configNodeName', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostConfigPropertyRequest:
    path_params: PostConfigPropertyPathParams = field()
    

@dataclass
class PostConfigPropertyResponse:
    content_type: str = field()
    status_code: int = field()
    
