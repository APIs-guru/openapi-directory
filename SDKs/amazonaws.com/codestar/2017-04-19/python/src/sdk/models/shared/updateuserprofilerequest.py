from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateUserProfileRequest:
    user_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userArn') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddress') }})
    ssh_public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sshPublicKey') }})
    
