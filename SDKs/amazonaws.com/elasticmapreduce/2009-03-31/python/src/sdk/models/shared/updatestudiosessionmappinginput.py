from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateStudioSessionMappingInput:
    identity_type: IdentityTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityType') }})
    session_policy_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SessionPolicyArn') }})
    studio_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StudioId') }})
    identity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityId') }})
    identity_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityName') }})
    
