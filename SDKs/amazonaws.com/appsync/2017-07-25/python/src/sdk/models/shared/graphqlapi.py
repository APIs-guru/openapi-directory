from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GraphqlAPI:
    r"""GraphqlAPI
    Describes a GraphQL API.
    """
    
    additional_authentication_providers: Optional[List[AdditionalAuthenticationProvider]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalAuthenticationProviders') }})
    api_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiId') }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    authentication_type: Optional[AuthenticationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticationType') }})
    lambda_authorizer_config: Optional[LambdaAuthorizerConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaAuthorizerConfig') }})
    log_config: Optional[LogConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logConfig') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    open_id_connect_config: Optional[OpenIDConnectConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openIDConnectConfig') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    uris: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uris') }})
    user_pool_config: Optional[UserPoolConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userPoolConfig') }})
    waf_web_acl_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wafWebAclArn') }})
    xray_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xrayEnabled') }})
    
