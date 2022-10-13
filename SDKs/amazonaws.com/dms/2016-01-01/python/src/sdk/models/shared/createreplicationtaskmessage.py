from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import migrationtypevalue_enum
from . import tag


@dataclass_json
@dataclass
class CreateReplicationTaskMessage:
    cdc_start_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CdcStartPosition' }})
    cdc_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CdcStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    cdc_stop_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CdcStopPosition' }})
    migration_type: migrationtypevalue_enum.MigrationTypeValueEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MigrationType' }})
    replication_instance_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationInstanceArn' }})
    replication_task_identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationTaskIdentifier' }})
    replication_task_settings: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationTaskSettings' }})
    resource_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceIdentifier' }})
    source_endpoint_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceEndpointArn' }})
    table_mappings: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableMappings' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    target_endpoint_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetEndpointArn' }})
    task_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskData' }})
    
