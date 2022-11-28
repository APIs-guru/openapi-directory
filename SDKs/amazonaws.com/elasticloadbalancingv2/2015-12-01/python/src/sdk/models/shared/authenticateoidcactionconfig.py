from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class AuthenticateOidcActionConfig:
    r"""AuthenticateOidcActionConfig
    Request parameters when using an identity provider (IdP) that is compliant with OpenID Connect (OIDC) to authenticate users.
    """
    
    authorization_endpoint: str = field()
    client_id: str = field()
    issuer: str = field()
    token_endpoint: str = field()
    user_info_endpoint: str = field()
    authentication_request_extra_params: Optional[dict[str, str]] = field(default=None)
    client_secret: Optional[str] = field(default=None)
    on_unauthenticated_request: Optional[AuthenticateOidcActionConditionalBehaviorEnumEnum] = field(default=None)
    scope: Optional[str] = field(default=None)
    session_cookie_name: Optional[str] = field(default=None)
    session_timeout: Optional[int] = field(default=None)
    use_existing_client_secret: Optional[bool] = field(default=None)
    
