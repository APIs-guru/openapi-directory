from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateGlobalTableSettingsInput:
    global_table_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalTableName') }})
    global_table_billing_mode: Optional[BillingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalTableBillingMode') }})
    global_table_global_secondary_index_settings_update: Optional[List[GlobalTableGlobalSecondaryIndexSettingsUpdate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalTableGlobalSecondaryIndexSettingsUpdate') }})
    global_table_provisioned_write_capacity_auto_scaling_settings_update: Optional[AutoScalingSettingsUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate') }})
    global_table_provisioned_write_capacity_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalTableProvisionedWriteCapacityUnits') }})
    replica_settings_update: Optional[List[ReplicaSettingsUpdate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicaSettingsUpdate') }})
    
