from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VerifyUserAttributeRequest:
    r"""VerifyUserAttributeRequest
    Represents the request to verify user attributes.
    """
    
    access_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessToken') }})
    attribute_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeName') }})
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    
