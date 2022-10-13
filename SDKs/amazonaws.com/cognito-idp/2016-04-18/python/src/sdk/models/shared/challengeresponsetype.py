from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import challengename_enum
from . import challengeresponse_enum


@dataclass_json
@dataclass
class ChallengeResponseType:
    challenge_name: Optional[challengename_enum.ChallengeNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChallengeName' }})
    challenge_response: Optional[challengeresponse_enum.ChallengeResponseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChallengeResponse' }})
    
