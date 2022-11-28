from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReplicaAutoScalingUpdate:
    r"""ReplicaAutoScalingUpdate
    Represents the auto scaling settings of a replica that will be modified.
    """
    
    region_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegionName') }})
    replica_global_secondary_index_updates: Optional[List[ReplicaGlobalSecondaryIndexAutoScalingUpdate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicaGlobalSecondaryIndexUpdates') }})
    replica_provisioned_read_capacity_auto_scaling_update: Optional[AutoScalingSettingsUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicaProvisionedReadCapacityAutoScalingUpdate') }})
    
