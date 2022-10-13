from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import migrationtypevalue_enum


@dataclass_json
@dataclass
class ModifyReplicationTaskMessage:
    cdc_start_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CdcStartPosition' }})
    cdc_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CdcStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    cdc_stop_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CdcStopPosition' }})
    migration_type: Optional[migrationtypevalue_enum.MigrationTypeValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MigrationType' }})
    replication_task_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationTaskArn' }})
    replication_task_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationTaskIdentifier' }})
    replication_task_settings: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationTaskSettings' }})
    table_mappings: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableMappings' }})
    task_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskData' }})
    
