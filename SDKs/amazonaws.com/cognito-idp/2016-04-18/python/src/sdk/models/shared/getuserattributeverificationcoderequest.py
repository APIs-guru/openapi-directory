from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetUserAttributeVerificationCodeRequest:
    r"""GetUserAttributeVerificationCodeRequest
    Represents the request to get user attribute verification.
    """
    
    access_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessToken') }})
    attribute_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeName') }})
    client_metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientMetadata') }})
    
