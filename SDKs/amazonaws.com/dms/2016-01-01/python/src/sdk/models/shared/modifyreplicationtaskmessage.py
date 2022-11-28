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
class ModifyReplicationTaskMessage:
    r"""ModifyReplicationTaskMessage
    <p/>
    """
    
    replication_task_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationTaskArn') }})
    cdc_start_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CdcStartPosition') }})
    cdc_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CdcStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    cdc_stop_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CdcStopPosition') }})
    migration_type: Optional[MigrationTypeValueEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MigrationType') }})
    replication_task_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationTaskIdentifier') }})
    replication_task_settings: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationTaskSettings') }})
    table_mappings: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableMappings') }})
    task_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskData') }})
    
