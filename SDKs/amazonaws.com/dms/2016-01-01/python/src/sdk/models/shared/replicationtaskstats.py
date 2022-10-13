from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReplicationTaskStats:
    elapsed_time_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ElapsedTimeMillis' }})
    fresh_start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FreshStartDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    full_load_finish_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FullLoadFinishDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    full_load_progress_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FullLoadProgressPercent' }})
    full_load_start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FullLoadStartDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    stop_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StopDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tables_errored: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TablesErrored' }})
    tables_loaded: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TablesLoaded' }})
    tables_loading: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TablesLoading' }})
    tables_queued: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TablesQueued' }})
    
