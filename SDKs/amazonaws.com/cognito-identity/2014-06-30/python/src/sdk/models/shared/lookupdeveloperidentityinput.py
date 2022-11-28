from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LookupDeveloperIdentityInput:
    r"""LookupDeveloperIdentityInput
    Input to the <code>LookupDeveloperIdentityInput</code> action.
    """
    
    identity_pool_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolId') }})
    developer_user_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeveloperUserIdentifier') }})
    identity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityId') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
