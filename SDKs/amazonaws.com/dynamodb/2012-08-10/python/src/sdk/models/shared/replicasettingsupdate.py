from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import replicaglobalsecondaryindexsettingsupdate
from . import autoscalingsettingsupdate


@dataclass_json
@dataclass
class ReplicaSettingsUpdate:
    region_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegionName' }})
    replica_global_secondary_index_settings_update: Optional[List[replicaglobalsecondaryindexsettingsupdate.ReplicaGlobalSecondaryIndexSettingsUpdate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicaGlobalSecondaryIndexSettingsUpdate' }})
    replica_provisioned_read_capacity_auto_scaling_settings_update: Optional[autoscalingsettingsupdate.AutoScalingSettingsUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate' }})
    replica_provisioned_read_capacity_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicaProvisionedReadCapacityUnits' }})
    
