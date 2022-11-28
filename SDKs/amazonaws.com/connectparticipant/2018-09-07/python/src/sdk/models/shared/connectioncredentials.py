from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConnectionCredentials:
    r"""ConnectionCredentials
    Connection credentials. 
    """
    
    connection_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionToken') }})
    expiry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Expiry') }})
    
