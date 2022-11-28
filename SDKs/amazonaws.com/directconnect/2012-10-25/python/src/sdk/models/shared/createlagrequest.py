from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateLagRequest:
    connections_bandwidth: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionsBandwidth') }})
    lag_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lagName') }})
    location: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    number_of_connections: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfConnections') }})
    child_connection_tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childConnectionTags') }})
    connection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionId') }})
    provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerName') }})
    request_mac_sec: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMACSec') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
