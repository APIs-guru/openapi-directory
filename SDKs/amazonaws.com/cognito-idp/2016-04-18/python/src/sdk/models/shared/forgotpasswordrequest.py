from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ForgotPasswordRequest:
    r"""ForgotPasswordRequest
    Represents the request to reset a user's password.
    """
    
    client_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientId') }})
    username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    analytics_metadata: Optional[AnalyticsMetadataType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnalyticsMetadata') }})
    client_metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientMetadata') }})
    secret_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretHash') }})
    user_context_data: Optional[UserContextDataType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserContextData') }})
    
