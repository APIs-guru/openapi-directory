from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import authenticationresulttype
from . import challengenametype_enum


@dataclass_json
@dataclass
class AdminInitiateAuthResponse:
    authentication_result: Optional[authenticationresulttype.AuthenticationResultType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthenticationResult' }})
    challenge_name: Optional[challengenametype_enum.ChallengeNameTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChallengeName' }})
    challenge_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChallengeParameters' }})
    session: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Session' }})
    
