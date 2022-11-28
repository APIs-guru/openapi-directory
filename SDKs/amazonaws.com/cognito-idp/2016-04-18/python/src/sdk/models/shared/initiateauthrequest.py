from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InitiateAuthRequest:
    r"""InitiateAuthRequest
    Initiates the authentication request.
    """
    
    auth_flow: AuthFlowTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthFlow') }})
    client_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientId') }})
    analytics_metadata: Optional[AnalyticsMetadataType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnalyticsMetadata') }})
    auth_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthParameters') }})
    client_metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientMetadata') }})
    user_context_data: Optional[UserContextDataType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserContextData') }})
    
