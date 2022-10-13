from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReplicationPendingModifiedValues:
    allocated_storage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllocatedStorage' }})
    engine_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngineVersion' }})
    multi_az: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MultiAZ' }})
    replication_instance_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationInstanceClass' }})
    
