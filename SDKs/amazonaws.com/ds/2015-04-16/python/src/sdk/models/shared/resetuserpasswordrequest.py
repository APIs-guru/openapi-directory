from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResetUserPasswordRequest:
    directory_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    new_password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NewPassword') }})
    user_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserName') }})
    
