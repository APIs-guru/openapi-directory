from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ListIdentitiesInput:
    r"""ListIdentitiesInput
    Input to the ListIdentities action.
    """
    
    identity_pool_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolId') }})
    max_results: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    hide_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HideDisabled') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
