from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resourceservertype


@dataclass_json
@dataclass
class ListResourceServersResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    resource_servers: List[resourceservertype.ResourceServerType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceServers' }})
    
