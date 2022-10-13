from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import additionalauthenticationprovider
from . import authenticationtype_enum
from . import lambdaauthorizerconfig
from . import logconfig
from . import openidconnectconfig
from . import userpoolconfig


@dataclass_json
@dataclass
class GraphqlAPI:
    additional_authentication_providers: Optional[List[additionalauthenticationprovider.AdditionalAuthenticationProvider]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalAuthenticationProviders' }})
    api_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiId' }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    authentication_type: Optional[authenticationtype_enum.AuthenticationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authenticationType' }})
    lambda_authorizer_config: Optional[lambdaauthorizerconfig.LambdaAuthorizerConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambdaAuthorizerConfig' }})
    log_config: Optional[logconfig.LogConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logConfig' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    open_id_connect_config: Optional[openidconnectconfig.OpenIDConnectConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openIDConnectConfig' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    uris: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uris' }})
    user_pool_config: Optional[userpoolconfig.UserPoolConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userPoolConfig' }})
    waf_web_acl_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wafWebAclArn' }})
    xray_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'xrayEnabled' }})
    
