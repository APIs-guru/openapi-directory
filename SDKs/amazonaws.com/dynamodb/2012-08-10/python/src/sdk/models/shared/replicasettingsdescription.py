from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import billingmodesummary
from . import replicaglobalsecondaryindexsettingsdescription
from . import autoscalingsettingsdescription
from . import autoscalingsettingsdescription
from . import replicastatus_enum


@dataclass_json
@dataclass
class ReplicaSettingsDescription:
    region_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegionName' }})
    replica_billing_mode_summary: Optional[billingmodesummary.BillingModeSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicaBillingModeSummary' }})
    replica_global_secondary_index_settings: Optional[List[replicaglobalsecondaryindexsettingsdescription.ReplicaGlobalSecondaryIndexSettingsDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicaGlobalSecondaryIndexSettings' }})
    replica_provisioned_read_capacity_auto_scaling_settings: Optional[autoscalingsettingsdescription.AutoScalingSettingsDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicaProvisionedReadCapacityAutoScalingSettings' }})
    replica_provisioned_read_capacity_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicaProvisionedReadCapacityUnits' }})
    replica_provisioned_write_capacity_auto_scaling_settings: Optional[autoscalingsettingsdescription.AutoScalingSettingsDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicaProvisionedWriteCapacityAutoScalingSettings' }})
    replica_provisioned_write_capacity_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicaProvisionedWriteCapacityUnits' }})
    replica_status: Optional[replicastatus_enum.ReplicaStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicaStatus' }})
    
