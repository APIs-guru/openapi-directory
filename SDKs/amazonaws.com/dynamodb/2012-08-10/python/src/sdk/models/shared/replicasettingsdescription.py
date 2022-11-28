from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReplicaSettingsDescription:
    r"""ReplicaSettingsDescription
    Represents the properties of a replica.
    """
    
    region_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegionName') }})
    replica_billing_mode_summary: Optional[BillingModeSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicaBillingModeSummary') }})
    replica_global_secondary_index_settings: Optional[List[ReplicaGlobalSecondaryIndexSettingsDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicaGlobalSecondaryIndexSettings') }})
    replica_provisioned_read_capacity_auto_scaling_settings: Optional[AutoScalingSettingsDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicaProvisionedReadCapacityAutoScalingSettings') }})
    replica_provisioned_read_capacity_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicaProvisionedReadCapacityUnits') }})
    replica_provisioned_write_capacity_auto_scaling_settings: Optional[AutoScalingSettingsDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicaProvisionedWriteCapacityAutoScalingSettings') }})
    replica_provisioned_write_capacity_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicaProvisionedWriteCapacityUnits') }})
    replica_status: Optional[ReplicaStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicaStatus') }})
    
