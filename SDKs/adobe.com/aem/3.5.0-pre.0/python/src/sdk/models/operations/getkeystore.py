from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetKeystorePathParams:
    authorizable_id: str = field(default=None, metadata={'path_param': { 'field_name': 'authorizableId', 'style': 'simple', 'explode': False }})
    intermediate_path: str = field(default=None, metadata={'path_param': { 'field_name': 'intermediatePath', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetKeystoreRequest:
    path_params: GetKeystorePathParams = field(default=None)
    

@dataclass
class GetKeystoreResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_keystore_default_application_octet_stream_binary_string: Optional[bytes] = field(default=None)
    
