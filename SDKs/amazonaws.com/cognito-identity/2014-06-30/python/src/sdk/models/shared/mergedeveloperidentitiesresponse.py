from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MergeDeveloperIdentitiesResponse:
    r"""MergeDeveloperIdentitiesResponse
    Returned in response to a successful <code>MergeDeveloperIdentities</code> action.
    """
    
    identity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityId') }})
    
