from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConnectionAPIKeyAuthResponseParameters:
    r"""ConnectionAPIKeyAuthResponseParameters
    Contains the authorization parameters for the connection if API Key is specified as the authorization type.
    """
    
    api_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApiKeyName') }})
    
