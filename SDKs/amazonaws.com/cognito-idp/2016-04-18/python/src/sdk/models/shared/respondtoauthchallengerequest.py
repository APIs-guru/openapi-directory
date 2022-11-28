from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RespondToAuthChallengeRequest:
    r"""RespondToAuthChallengeRequest
    The request to respond to an authentication challenge.
    """
    
    challenge_name: ChallengeNameTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChallengeName') }})
    client_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientId') }})
    analytics_metadata: Optional[AnalyticsMetadataType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnalyticsMetadata') }})
    challenge_responses: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChallengeResponses') }})
    client_metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientMetadata') }})
    session: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Session') }})
    user_context_data: Optional[UserContextDataType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserContextData') }})
    
