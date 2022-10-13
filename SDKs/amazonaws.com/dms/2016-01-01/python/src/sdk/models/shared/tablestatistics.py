from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TableStatistics:
    ddls: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ddls' }})
    deletes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Deletes' }})
    full_load_condtnl_chk_failed_rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FullLoadCondtnlChkFailedRows' }})
    full_load_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FullLoadEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    full_load_error_rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FullLoadErrorRows' }})
    full_load_reloaded: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FullLoadReloaded' }})
    full_load_rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FullLoadRows' }})
    full_load_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FullLoadStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    inserts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Inserts' }})
    last_update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    schema_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaName' }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    table_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableState' }})
    updates: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Updates' }})
    validation_failed_records: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationFailedRecords' }})
    validation_pending_records: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationPendingRecords' }})
    validation_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationState' }})
    validation_state_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationStateDetails' }})
    validation_suspended_records: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationSuspendedRecords' }})
    
