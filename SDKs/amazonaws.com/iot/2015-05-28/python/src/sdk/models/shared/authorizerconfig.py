from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AuthorizerConfig:
    r"""AuthorizerConfig
    An object that specifies the authorization service for a domain.
    """
    
    allow_authorizer_override: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowAuthorizerOverride') }})
    default_authorizer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultAuthorizerName') }})
    
