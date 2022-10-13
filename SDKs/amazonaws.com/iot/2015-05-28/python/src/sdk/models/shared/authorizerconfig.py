from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AuthorizerConfig:
    allow_authorizer_override: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowAuthorizerOverride' }})
    default_authorizer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultAuthorizerName' }})
    
