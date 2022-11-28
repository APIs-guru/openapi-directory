from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetStudioSessionMappingInput:
    identity_type: IdentityTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityType') }})
    studio_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StudioId') }})
    identity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityId') }})
    identity_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityName') }})
    
