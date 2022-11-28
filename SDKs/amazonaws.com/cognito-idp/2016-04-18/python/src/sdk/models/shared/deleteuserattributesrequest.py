from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteUserAttributesRequest:
    r"""DeleteUserAttributesRequest
    Represents the request to delete user attributes.
    """
    
    access_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessToken') }})
    user_attribute_names: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserAttributeNames') }})
    
