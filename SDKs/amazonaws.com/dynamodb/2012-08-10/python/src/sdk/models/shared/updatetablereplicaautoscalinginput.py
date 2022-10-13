from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import globalsecondaryindexautoscalingupdate
from . import autoscalingsettingsupdate
from . import replicaautoscalingupdate


@dataclass_json
@dataclass
class UpdateTableReplicaAutoScalingInput:
    global_secondary_index_updates: Optional[List[globalsecondaryindexautoscalingupdate.GlobalSecondaryIndexAutoScalingUpdate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalSecondaryIndexUpdates' }})
    provisioned_write_capacity_auto_scaling_update: Optional[autoscalingsettingsupdate.AutoScalingSettingsUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedWriteCapacityAutoScalingUpdate' }})
    replica_updates: Optional[List[replicaautoscalingupdate.ReplicaAutoScalingUpdate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicaUpdates' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    
