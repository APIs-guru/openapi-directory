from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetKeystorePathParams:
    authorizable_id: str = field(metadata={'path_param': { 'field_name': 'authorizableId', 'style': 'simple', 'explode': False }})
    intermediate_path: str = field(metadata={'path_param': { 'field_name': 'intermediatePath', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetKeystoreRequest:
    path_params: GetKeystorePathParams = field()
    

@dataclass
class GetKeystoreResponse:
    content_type: str = field()
    status_code: int = field()
    get_keystore_default_application_octet_stream_binary_string: Optional[bytes] = field(default=None)
    
