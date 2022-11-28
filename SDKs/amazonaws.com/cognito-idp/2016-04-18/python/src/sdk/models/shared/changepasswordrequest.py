from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ChangePasswordRequest:
    r"""ChangePasswordRequest
    Represents the request to change a user password.
    """
    
    access_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessToken') }})
    previous_password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreviousPassword') }})
    proposed_password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProposedPassword') }})
    
