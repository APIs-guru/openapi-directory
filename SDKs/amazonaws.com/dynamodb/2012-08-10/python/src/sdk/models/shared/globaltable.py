from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import replica


@dataclass_json
@dataclass
class GlobalTable:
    global_table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalTableName' }})
    replication_group: Optional[List[replica.Replica]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationGroup' }})
    
