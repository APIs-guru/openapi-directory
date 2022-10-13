from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import analyticsmetadatatype
from . import challengenametype_enum
from . import usercontextdatatype


@dataclass_json
@dataclass
class RespondToAuthChallengeRequest:
    analytics_metadata: Optional[analyticsmetadatatype.AnalyticsMetadataType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnalyticsMetadata' }})
    challenge_name: challengenametype_enum.ChallengeNameTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChallengeName' }})
    challenge_responses: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChallengeResponses' }})
    client_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientId' }})
    client_metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientMetadata' }})
    session: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Session' }})
    user_context_data: Optional[usercontextdatatype.UserContextDataType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserContextData' }})
    
