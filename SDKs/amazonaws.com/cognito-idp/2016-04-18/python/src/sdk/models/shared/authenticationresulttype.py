from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AuthenticationResultType:
    r"""AuthenticationResultType
    The authentication result.
    """
    
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessToken') }})
    expires_in: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpiresIn') }})
    id_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdToken') }})
    new_device_metadata: Optional[NewDeviceMetadataType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NewDeviceMetadata') }})
    refresh_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RefreshToken') }})
    token_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TokenType') }})
    
