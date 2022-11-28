from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class User:
    r"""User
    A user object, which contains a specified user’s metadata and attributes.
    """
    
    user_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserId') }})
    user_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserName') }})
    
