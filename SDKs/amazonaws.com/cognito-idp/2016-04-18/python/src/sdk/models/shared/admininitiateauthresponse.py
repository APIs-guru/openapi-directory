from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AdminInitiateAuthResponse:
    r"""AdminInitiateAuthResponse
    Initiates the authentication response, as an administrator.
    """
    
    authentication_result: Optional[AuthenticationResultType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthenticationResult') }})
    challenge_name: Optional[ChallengeNameTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChallengeName') }})
    challenge_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChallengeParameters') }})
    session: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Session') }})
    
