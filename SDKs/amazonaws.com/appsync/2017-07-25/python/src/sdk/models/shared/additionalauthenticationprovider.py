from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import authenticationtype_enum
from . import lambdaauthorizerconfig
from . import openidconnectconfig
from . import cognitouserpoolconfig


@dataclass_json
@dataclass
class AdditionalAuthenticationProvider:
    authentication_type: Optional[authenticationtype_enum.AuthenticationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authenticationType' }})
    lambda_authorizer_config: Optional[lambdaauthorizerconfig.LambdaAuthorizerConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambdaAuthorizerConfig' }})
    open_id_connect_config: Optional[openidconnectconfig.OpenIDConnectConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openIDConnectConfig' }})
    user_pool_config: Optional[cognitouserpoolconfig.CognitoUserPoolConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userPoolConfig' }})
    
