from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import indexstatus_enum
from . import autoscalingsettingsdescription
from . import autoscalingsettingsdescription


@dataclass_json
@dataclass
class ReplicaGlobalSecondaryIndexSettingsDescription:
    index_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexName' }})
    index_status: Optional[indexstatus_enum.IndexStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexStatus' }})
    provisioned_read_capacity_auto_scaling_settings: Optional[autoscalingsettingsdescription.AutoScalingSettingsDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedReadCapacityAutoScalingSettings' }})
    provisioned_read_capacity_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedReadCapacityUnits' }})
    provisioned_write_capacity_auto_scaling_settings: Optional[autoscalingsettingsdescription.AutoScalingSettingsDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedWriteCapacityAutoScalingSettings' }})
    provisioned_write_capacity_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedWriteCapacityUnits' }})
    
