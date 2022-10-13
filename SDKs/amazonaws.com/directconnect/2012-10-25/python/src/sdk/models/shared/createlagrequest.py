from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag
from . import tag


@dataclass_json
@dataclass
class CreateLagRequest:
    child_connection_tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childConnectionTags' }})
    connection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionId' }})
    connections_bandwidth: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionsBandwidth' }})
    lag_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lagName' }})
    location: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    number_of_connections: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfConnections' }})
    provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'providerName' }})
    request_mac_sec: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestMACSec' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
