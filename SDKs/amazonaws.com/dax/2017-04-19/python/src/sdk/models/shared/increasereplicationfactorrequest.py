from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IncreaseReplicationFactorRequest:
    cluster_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterName') }})
    new_replication_factor: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NewReplicationFactor') }})
    availability_zones: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailabilityZones') }})
    
