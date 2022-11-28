from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateConnectionRequest:
    bandwidth: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidth') }})
    connection_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionName') }})
    location: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    lag_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lagId') }})
    provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerName') }})
    request_mac_sec: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMACSec') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
