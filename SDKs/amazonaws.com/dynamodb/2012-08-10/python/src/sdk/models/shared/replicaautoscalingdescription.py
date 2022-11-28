from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReplicaAutoScalingDescription:
    r"""ReplicaAutoScalingDescription
    Represents the auto scaling settings of the replica.
    """
    
    global_secondary_indexes: Optional[List[ReplicaGlobalSecondaryIndexAutoScalingDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalSecondaryIndexes') }})
    region_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegionName') }})
    replica_provisioned_read_capacity_auto_scaling_settings: Optional[AutoScalingSettingsDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicaProvisionedReadCapacityAutoScalingSettings') }})
    replica_provisioned_write_capacity_auto_scaling_settings: Optional[AutoScalingSettingsDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicaProvisionedWriteCapacityAutoScalingSettings') }})
    replica_status: Optional[ReplicaStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicaStatus') }})
    
