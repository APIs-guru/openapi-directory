from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VerifySoftwareTokenRequest:
    user_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserCode') }})
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessToken') }})
    friendly_device_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FriendlyDeviceName') }})
    session: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Session') }})
    
