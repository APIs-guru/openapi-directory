from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteIdentitiesResponse:
    r"""DeleteIdentitiesResponse
    Returned in response to a successful <code>DeleteIdentities</code> operation.
    """
    
    unprocessed_identity_ids: Optional[List[UnprocessedIdentityID]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnprocessedIdentityIds') }})
    
