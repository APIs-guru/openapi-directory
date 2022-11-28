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
class ReplicaSettingsUpdate:
    r"""ReplicaSettingsUpdate
    Represents the settings for a global table in a Region that will be modified.
    """
    
    region_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegionName') }})
    replica_global_secondary_index_settings_update: Optional[List[ReplicaGlobalSecondaryIndexSettingsUpdate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicaGlobalSecondaryIndexSettingsUpdate') }})
    replica_provisioned_read_capacity_auto_scaling_settings_update: Optional[AutoScalingSettingsUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate') }})
    replica_provisioned_read_capacity_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicaProvisionedReadCapacityUnits') }})
    
