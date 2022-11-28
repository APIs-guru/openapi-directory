from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class AuthenticateCognitoActionConfig:
    r"""AuthenticateCognitoActionConfig
    Request parameters to use when integrating with Amazon Cognito to authenticate users.
    """
    
    user_pool_arn: str = field()
    user_pool_client_id: str = field()
    user_pool_domain: str = field()
    authentication_request_extra_params: Optional[dict[str, str]] = field(default=None)
    on_unauthenticated_request: Optional[AuthenticateCognitoActionConditionalBehaviorEnumEnum] = field(default=None)
    scope: Optional[str] = field(default=None)
    session_cookie_name: Optional[str] = field(default=None)
    session_timeout: Optional[int] = field(default=None)
    
