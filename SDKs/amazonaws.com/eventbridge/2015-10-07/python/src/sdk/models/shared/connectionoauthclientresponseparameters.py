from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConnectionOAuthClientResponseParameters:
    r"""ConnectionOAuthClientResponseParameters
    Contains the client response parameters for the connection when OAuth is specified as the authorization type.
    """
    
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientID') }})
    
