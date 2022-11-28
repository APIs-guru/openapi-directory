from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OAuthProperties:
    r"""OAuthProperties
     The OAuth properties required for OAuth type authentication. 
    """
    
    auth_code_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authCodeUrl') }})
    o_auth_scopes: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('oAuthScopes') }})
    token_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenUrl') }})
    
