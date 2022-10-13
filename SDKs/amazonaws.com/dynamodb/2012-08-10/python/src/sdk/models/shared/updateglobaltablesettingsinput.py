from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import billingmode_enum
from . import globaltableglobalsecondaryindexsettingsupdate
from . import autoscalingsettingsupdate
from . import replicasettingsupdate


@dataclass_json
@dataclass
class UpdateGlobalTableSettingsInput:
    global_table_billing_mode: Optional[billingmode_enum.BillingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalTableBillingMode' }})
    global_table_global_secondary_index_settings_update: Optional[List[globaltableglobalsecondaryindexsettingsupdate.GlobalTableGlobalSecondaryIndexSettingsUpdate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalTableGlobalSecondaryIndexSettingsUpdate' }})
    global_table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalTableName' }})
    global_table_provisioned_write_capacity_auto_scaling_settings_update: Optional[autoscalingsettingsupdate.AutoScalingSettingsUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate' }})
    global_table_provisioned_write_capacity_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalTableProvisionedWriteCapacityUnits' }})
    replica_settings_update: Optional[List[replicasettingsupdate.ReplicaSettingsUpdate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicaSettingsUpdate' }})
    
