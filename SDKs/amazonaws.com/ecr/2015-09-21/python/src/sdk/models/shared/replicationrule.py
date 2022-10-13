from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import replicationdestination


@dataclass_json
@dataclass
class ReplicationRule:
    destinations: List[replicationdestination.ReplicationDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinations' }})
    
