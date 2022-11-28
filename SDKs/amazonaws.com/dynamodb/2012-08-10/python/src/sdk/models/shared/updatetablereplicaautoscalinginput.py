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
class UpdateTableReplicaAutoScalingInput:
    table_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    global_secondary_index_updates: Optional[List[GlobalSecondaryIndexAutoScalingUpdate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalSecondaryIndexUpdates') }})
    provisioned_write_capacity_auto_scaling_update: Optional[AutoScalingSettingsUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedWriteCapacityAutoScalingUpdate') }})
    replica_updates: Optional[List[ReplicaAutoScalingUpdate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicaUpdates') }})
    
