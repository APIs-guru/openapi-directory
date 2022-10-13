from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import replicaglobalsecondaryindexautoscalingupdate
from . import autoscalingsettingsupdate


@dataclass_json
@dataclass
class ReplicaAutoScalingUpdate:
    region_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegionName' }})
    replica_global_secondary_index_updates: Optional[List[replicaglobalsecondaryindexautoscalingupdate.ReplicaGlobalSecondaryIndexAutoScalingUpdate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicaGlobalSecondaryIndexUpdates' }})
    replica_provisioned_read_capacity_auto_scaling_update: Optional[autoscalingsettingsupdate.AutoScalingSettingsUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicaProvisionedReadCapacityAutoScalingUpdate' }})
    
