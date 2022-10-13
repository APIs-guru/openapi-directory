from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import authresources_enum
from . import createbackendauthidentitypoolconfig
from . import service_enum
from . import createbackendauthuserpoolconfig


@dataclass_json
@dataclass
class CreateBackendAuthResourceConfig:
    auth_resources: authresources_enum.AuthResourcesEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthResources' }})
    identity_pool_configs: Optional[createbackendauthidentitypoolconfig.CreateBackendAuthIdentityPoolConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityPoolConfigs' }})
    service: service_enum.ServiceEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Service' }})
    user_pool_configs: createbackendauthuserpoolconfig.CreateBackendAuthUserPoolConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolConfigs' }})
    
