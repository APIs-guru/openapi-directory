from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListIdentitiesResponse:
    r"""ListIdentitiesResponse
    The response to a ListIdentities request.
    """
    
    identities: Optional[List[IdentityDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identities') }})
    identity_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolId') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
