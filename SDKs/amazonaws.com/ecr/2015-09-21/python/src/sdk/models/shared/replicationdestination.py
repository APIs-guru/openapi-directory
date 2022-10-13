from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReplicationDestination:
    region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    registry_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registryId' }})
    
