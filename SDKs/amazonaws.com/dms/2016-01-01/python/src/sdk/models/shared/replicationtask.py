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
class ReplicationTask:
    r"""ReplicationTask
    Provides information that describes a replication task created by the <code>CreateReplicationTask</code> operation.
    """
    
    cdc_start_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CdcStartPosition') }})
    cdc_stop_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CdcStopPosition') }})
    last_failure_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastFailureMessage') }})
    migration_type: Optional[MigrationTypeValueEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MigrationType') }})
    recovery_checkpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecoveryCheckpoint') }})
    replication_instance_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationInstanceArn') }})
    replication_task_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationTaskArn') }})
    replication_task_creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationTaskCreationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    replication_task_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationTaskIdentifier') }})
    replication_task_settings: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationTaskSettings') }})
    replication_task_start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationTaskStartDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    replication_task_stats: Optional[ReplicationTaskStats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationTaskStats') }})
    source_endpoint_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceEndpointArn') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    stop_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StopReason') }})
    table_mappings: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableMappings') }})
    target_endpoint_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetEndpointArn') }})
    target_replication_instance_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetReplicationInstanceArn') }})
    task_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskData') }})
    
