from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TableStatistics:
    r"""TableStatistics
    Provides a collection of table statistics in response to a request by the <code>DescribeTableStatistics</code> operation.
    """
    
    ddls: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ddls') }})
    deletes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Deletes') }})
    full_load_condtnl_chk_failed_rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FullLoadCondtnlChkFailedRows') }})
    full_load_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FullLoadEndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    full_load_error_rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FullLoadErrorRows') }})
    full_load_reloaded: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FullLoadReloaded') }})
    full_load_rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FullLoadRows') }})
    full_load_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FullLoadStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    inserts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Inserts') }})
    last_update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    schema_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaName') }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    table_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableState') }})
    updates: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Updates') }})
    validation_failed_records: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationFailedRecords') }})
    validation_pending_records: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationPendingRecords') }})
    validation_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationState') }})
    validation_state_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationStateDetails') }})
    validation_suspended_records: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationSuspendedRecords') }})
    
