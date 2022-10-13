from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import autoscalingsettingsupdate


@dataclass_json
@dataclass
class ReplicaGlobalSecondaryIndexSettingsUpdate:
    index_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexName' }})
    provisioned_read_capacity_auto_scaling_settings_update: Optional[autoscalingsettingsupdate.AutoScalingSettingsUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedReadCapacityAutoScalingSettingsUpdate' }})
    provisioned_read_capacity_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedReadCapacityUnits' }})
    
