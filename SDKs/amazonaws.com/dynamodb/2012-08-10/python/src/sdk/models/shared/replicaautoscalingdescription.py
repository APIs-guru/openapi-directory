from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import replicaglobalsecondaryindexautoscalingdescription
from . import autoscalingsettingsdescription
from . import autoscalingsettingsdescription
from . import replicastatus_enum


@dataclass_json
@dataclass
class ReplicaAutoScalingDescription:
    global_secondary_indexes: Optional[List[replicaglobalsecondaryindexautoscalingdescription.ReplicaGlobalSecondaryIndexAutoScalingDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalSecondaryIndexes' }})
    region_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegionName' }})
    replica_provisioned_read_capacity_auto_scaling_settings: Optional[autoscalingsettingsdescription.AutoScalingSettingsDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicaProvisionedReadCapacityAutoScalingSettings' }})
    replica_provisioned_write_capacity_auto_scaling_settings: Optional[autoscalingsettingsdescription.AutoScalingSettingsDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicaProvisionedWriteCapacityAutoScalingSettings' }})
    replica_status: Optional[replicastatus_enum.ReplicaStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicaStatus' }})
    
