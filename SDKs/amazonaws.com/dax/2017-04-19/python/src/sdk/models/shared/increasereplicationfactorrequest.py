from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IncreaseReplicationFactorRequest:
    availability_zones: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailabilityZones' }})
    cluster_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterName' }})
    new_replication_factor: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NewReplicationFactor' }})
    
