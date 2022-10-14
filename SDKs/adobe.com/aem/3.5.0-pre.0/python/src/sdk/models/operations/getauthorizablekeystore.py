from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAuthorizableKeystorePathParams:
    authorizable_id: str = field(default=None, metadata={'path_param': { 'field_name': 'authorizableId', 'style': 'simple', 'explode': False }})
    intermediate_path: str = field(default=None, metadata={'path_param': { 'field_name': 'intermediatePath', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAuthorizableKeystoreRequest:
    path_params: GetAuthorizableKeystorePathParams = field(default=None)
    

@dataclass
class GetAuthorizableKeystoreResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_authorizable_keystore_default_text_plain_string: Optional[str] = field(default=None)
    
