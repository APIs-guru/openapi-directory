from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import migrationtypevalue_enum
from . import replicationtaskstats


@dataclass_json
@dataclass
class ReplicationTask:
    cdc_start_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CdcStartPosition' }})
    cdc_stop_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CdcStopPosition' }})
    last_failure_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastFailureMessage' }})
    migration_type: Optional[migrationtypevalue_enum.MigrationTypeValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MigrationType' }})
    recovery_checkpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecoveryCheckpoint' }})
    replication_instance_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationInstanceArn' }})
    replication_task_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationTaskArn' }})
    replication_task_creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationTaskCreationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    replication_task_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationTaskIdentifier' }})
    replication_task_settings: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationTaskSettings' }})
    replication_task_start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationTaskStartDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    replication_task_stats: Optional[replicationtaskstats.ReplicationTaskStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationTaskStats' }})
    source_endpoint_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceEndpointArn' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    stop_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StopReason' }})
    table_mappings: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableMappings' }})
    target_endpoint_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetEndpointArn' }})
    target_replication_instance_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetReplicationInstanceArn' }})
    task_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskData' }})
    
