from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RestoreTableFromBackupInput:
    backup_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackupArn') }})
    target_table_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetTableName') }})
    billing_mode_override: Optional[BillingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BillingModeOverride') }})
    global_secondary_index_override: Optional[List[GlobalSecondaryIndex]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalSecondaryIndexOverride') }})
    local_secondary_index_override: Optional[List[LocalSecondaryIndex]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalSecondaryIndexOverride') }})
    provisioned_throughput_override: Optional[ProvisionedThroughput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedThroughputOverride') }})
    sse_specification_override: Optional[SseSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SSESpecificationOverride') }})
    
