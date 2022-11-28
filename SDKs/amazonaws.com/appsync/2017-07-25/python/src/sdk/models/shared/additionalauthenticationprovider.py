from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AdditionalAuthenticationProvider:
    r"""AdditionalAuthenticationProvider
    Describes an additional authentication provider.
    """
    
    authentication_type: Optional[AuthenticationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticationType') }})
    lambda_authorizer_config: Optional[LambdaAuthorizerConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaAuthorizerConfig') }})
    open_id_connect_config: Optional[OpenIDConnectConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openIDConnectConfig') }})
    user_pool_config: Optional[CognitoUserPoolConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userPoolConfig') }})
    
