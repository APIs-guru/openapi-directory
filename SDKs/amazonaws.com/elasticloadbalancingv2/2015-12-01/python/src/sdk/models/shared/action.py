from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class Action:
    r"""Action
    <p>Information about an action.</p> <p>Each rule must include exactly one of the following types of actions: <code>forward</code>, <code>fixed-response</code>, or <code>redirect</code>, and it must be the last action to be performed.</p>
    """
    
    type: ActionTypeEnumEnum = field()
    authenticate_cognito_config: Optional[AuthenticateCognitoActionConfig] = field(default=None)
    authenticate_oidc_config: Optional[AuthenticateOidcActionConfig] = field(default=None)
    fixed_response_config: Optional[FixedResponseActionConfig] = field(default=None)
    forward_config: Optional[ForwardActionConfig] = field(default=None)
    order: Optional[int] = field(default=None)
    redirect_config: Optional[RedirectActionConfig] = field(default=None)
    target_group_arn: Optional[str] = field(default=None)
    
