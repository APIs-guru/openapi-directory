from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import analyticsmetadatatype
from . import challengenametype_enum
from . import contextdatatype


@dataclass_json
@dataclass
class AdminRespondToAuthChallengeRequest:
    analytics_metadata: Optional[analyticsmetadatatype.AnalyticsMetadataType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnalyticsMetadata' }})
    challenge_name: challengenametype_enum.ChallengeNameTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChallengeName' }})
    challenge_responses: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChallengeResponses' }})
    client_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientId' }})
    client_metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientMetadata' }})
    context_data: Optional[contextdatatype.ContextDataType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContextData' }})
    session: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Session' }})
    user_pool_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolId' }})
    
