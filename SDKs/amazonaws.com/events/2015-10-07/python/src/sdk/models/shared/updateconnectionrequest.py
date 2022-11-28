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
class UpdateConnectionRequest:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    auth_parameters: Optional[UpdateConnectionAuthRequestParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthParameters') }})
    authorization_type: Optional[ConnectionAuthorizationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorizationType') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    
