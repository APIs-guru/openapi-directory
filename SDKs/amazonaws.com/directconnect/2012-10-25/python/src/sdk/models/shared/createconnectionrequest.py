from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class CreateConnectionRequest:
    bandwidth: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandwidth' }})
    connection_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionName' }})
    lag_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lagId' }})
    location: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'providerName' }})
    request_mac_sec: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestMACSec' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
