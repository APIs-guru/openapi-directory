from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UnlinkIdentityInput:
    r"""UnlinkIdentityInput
    Input to the UnlinkIdentity action.
    """
    
    identity_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityId') }})
    logins: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Logins') }})
    logins_to_remove: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoginsToRemove') }})
    
