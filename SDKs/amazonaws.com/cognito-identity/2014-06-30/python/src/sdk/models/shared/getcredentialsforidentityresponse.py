from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetCredentialsForIdentityResponse:
    r"""GetCredentialsForIdentityResponse
    Returned in response to a successful <code>GetCredentialsForIdentity</code> operation.
    """
    
    credentials: Optional[Credentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Credentials') }})
    identity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityId') }})
    
