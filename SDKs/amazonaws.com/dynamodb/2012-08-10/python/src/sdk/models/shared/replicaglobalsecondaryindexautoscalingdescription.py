from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReplicaGlobalSecondaryIndexAutoScalingDescription:
    r"""ReplicaGlobalSecondaryIndexAutoScalingDescription
    Represents the auto scaling configuration for a replica global secondary index.
    """
    
    index_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexName') }})
    index_status: Optional[IndexStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexStatus') }})
    provisioned_read_capacity_auto_scaling_settings: Optional[AutoScalingSettingsDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedReadCapacityAutoScalingSettings') }})
    provisioned_write_capacity_auto_scaling_settings: Optional[AutoScalingSettingsDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedWriteCapacityAutoScalingSettings') }})
    
