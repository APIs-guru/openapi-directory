from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConnectionBasicAuthResponseParameters:
    r"""ConnectionBasicAuthResponseParameters
    Contains the authorization parameters for the connection if Basic is specified as the authorization type.
    """
    
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    
