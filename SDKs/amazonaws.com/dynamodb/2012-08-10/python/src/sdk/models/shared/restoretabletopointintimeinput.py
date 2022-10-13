from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import billingmode_enum
from . import globalsecondaryindex
from . import localsecondaryindex
from . import provisionedthroughput
from . import ssespecification


@dataclass_json
@dataclass
class RestoreTableToPointInTimeInput:
    billing_mode_override: Optional[billingmode_enum.BillingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BillingModeOverride' }})
    global_secondary_index_override: Optional[List[globalsecondaryindex.GlobalSecondaryIndex]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalSecondaryIndexOverride' }})
    local_secondary_index_override: Optional[List[localsecondaryindex.LocalSecondaryIndex]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalSecondaryIndexOverride' }})
    provisioned_throughput_override: Optional[provisionedthroughput.ProvisionedThroughput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedThroughputOverride' }})
    restore_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RestoreDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sse_specification_override: Optional[ssespecification.SseSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SSESpecificationOverride' }})
    source_table_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceTableArn' }})
    source_table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceTableName' }})
    target_table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetTableName' }})
    use_latest_restorable_time: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UseLatestRestorableTime' }})
    
