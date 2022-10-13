from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import replicaupdate


@dataclass_json
@dataclass
class UpdateGlobalTableInput:
    global_table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalTableName' }})
    replica_updates: List[replicaupdate.ReplicaUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicaUpdates' }})
    
