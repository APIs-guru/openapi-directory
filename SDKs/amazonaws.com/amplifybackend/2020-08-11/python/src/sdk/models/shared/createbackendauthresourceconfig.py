from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateBackendAuthResourceConfig:
    r"""CreateBackendAuthResourceConfig
    Defines the resource configuration when creating an auth resource in your Amplify project.
    """
    
    auth_resources: AuthResourcesEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthResources') }})
    service: ServiceEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Service') }})
    user_pool_configs: CreateBackendAuthUserPoolConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolConfigs') }})
    identity_pool_configs: Optional[CreateBackendAuthIdentityPoolConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolConfigs') }})
    
