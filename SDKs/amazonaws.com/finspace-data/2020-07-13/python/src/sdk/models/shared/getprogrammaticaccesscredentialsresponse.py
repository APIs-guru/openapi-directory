from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetProgrammaticAccessCredentialsResponse:
    credentials: Optional[Credentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentials') }})
    duration_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationInMinutes') }})
    
