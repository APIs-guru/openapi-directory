from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import replica


@dataclass_json
@dataclass
class CreateGlobalTableInput:
    global_table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalTableName' }})
    replication_group: List[replica.Replica] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationGroup' }})
    
