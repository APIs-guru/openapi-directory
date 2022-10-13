from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import billingmode_enum
from . import globalsecondaryindex
from . import localsecondaryindex
from . import provisionedthroughput
from . import ssespecification


@dataclass_json
@dataclass
class RestoreTableFromBackupInput:
    backup_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackupArn' }})
    billing_mode_override: Optional[billingmode_enum.BillingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BillingModeOverride' }})
    global_secondary_index_override: Optional[List[globalsecondaryindex.GlobalSecondaryIndex]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalSecondaryIndexOverride' }})
    local_secondary_index_override: Optional[List[localsecondaryindex.LocalSecondaryIndex]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalSecondaryIndexOverride' }})
    provisioned_throughput_override: Optional[provisionedthroughput.ProvisionedThroughput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedThroughputOverride' }})
    sse_specification_override: Optional[ssespecification.SseSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SSESpecificationOverride' }})
    target_table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetTableName' }})
    
