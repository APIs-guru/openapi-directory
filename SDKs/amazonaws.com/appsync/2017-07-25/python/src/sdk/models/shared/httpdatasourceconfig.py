from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HTTPDataSourceConfig:
    r"""HTTPDataSourceConfig
    Describes an HTTP data source configuration.
    """
    
    authorization_config: Optional[AuthorizationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizationConfig') }})
    endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    
