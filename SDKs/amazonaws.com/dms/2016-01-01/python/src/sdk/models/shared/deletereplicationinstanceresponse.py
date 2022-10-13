from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import replicationinstance


@dataclass_json
@dataclass
class DeleteReplicationInstanceResponse:
    replication_instance: Optional[replicationinstance.ReplicationInstance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationInstance' }})
    
