from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartReplicationTaskMessage:
    r"""StartReplicationTaskMessage
    <p/>
    """
    
    replication_task_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationTaskArn') }})
    start_replication_task_type: StartReplicationTaskTypeValueEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartReplicationTaskType') }})
    cdc_start_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CdcStartPosition') }})
    cdc_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CdcStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    cdc_stop_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CdcStopPosition') }})
    
