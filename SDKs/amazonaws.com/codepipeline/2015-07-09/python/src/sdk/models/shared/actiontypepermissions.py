from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ActionTypePermissions:
    r"""ActionTypePermissions
    Details identifying the users with permissions to use the action type.
    """
    
    allowed_accounts: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedAccounts') }})
    
