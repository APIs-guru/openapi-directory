from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import authorizationconfig


@dataclass_json
@dataclass
class HTTPDataSourceConfig:
    authorization_config: Optional[authorizationconfig.AuthorizationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizationConfig' }})
    endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpoint' }})
    
