from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class AllocateHostedConnectionRequest:
    bandwidth: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandwidth' }})
    connection_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionId' }})
    connection_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionName' }})
    owner_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerAccount' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    vlan: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlan' }})
    
