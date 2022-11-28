from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReplicationTaskStats:
    r"""ReplicationTaskStats
    In response to a request by the <code>DescribeReplicationTasks</code> operation, this object provides a collection of statistics about a replication task.
    """
    
    elapsed_time_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ElapsedTimeMillis') }})
    fresh_start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FreshStartDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    full_load_finish_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FullLoadFinishDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    full_load_progress_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FullLoadProgressPercent') }})
    full_load_start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FullLoadStartDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    stop_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StopDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tables_errored: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TablesErrored') }})
    tables_loaded: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TablesLoaded') }})
    tables_loading: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TablesLoading') }})
    tables_queued: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TablesQueued') }})
    
