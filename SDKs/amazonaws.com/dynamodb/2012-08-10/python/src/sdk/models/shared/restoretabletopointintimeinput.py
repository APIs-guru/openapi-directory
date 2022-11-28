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
class RestoreTableToPointInTimeInput:
    target_table_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetTableName') }})
    billing_mode_override: Optional[BillingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BillingModeOverride') }})
    global_secondary_index_override: Optional[List[GlobalSecondaryIndex]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalSecondaryIndexOverride') }})
    local_secondary_index_override: Optional[List[LocalSecondaryIndex]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalSecondaryIndexOverride') }})
    provisioned_throughput_override: Optional[ProvisionedThroughput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedThroughputOverride') }})
    restore_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RestoreDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sse_specification_override: Optional[SseSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SSESpecificationOverride') }})
    source_table_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceTableArn') }})
    source_table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceTableName') }})
    use_latest_restorable_time: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UseLatestRestorableTime') }})
    
