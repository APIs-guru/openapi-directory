from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AdminDeleteUserAttributesRequest:
    r"""AdminDeleteUserAttributesRequest
    Represents the request to delete user attributes as an administrator.
    """
    
    user_attribute_names: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserAttributeNames') }})
    user_pool_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    
