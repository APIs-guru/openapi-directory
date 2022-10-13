from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import connectionstate_enum


@dataclass_json
@dataclass
class ListConnectionsRequest:
    connection_state: Optional[connectionstate_enum.ConnectionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionState' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    name_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NamePrefix' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
