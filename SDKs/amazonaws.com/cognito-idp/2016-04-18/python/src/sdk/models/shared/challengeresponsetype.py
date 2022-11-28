from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ChallengeResponseType:
    r"""ChallengeResponseType
    The challenge response type.
    """
    
    challenge_name: Optional[ChallengeNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChallengeName') }})
    challenge_response: Optional[ChallengeResponseEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChallengeResponse') }})
    
