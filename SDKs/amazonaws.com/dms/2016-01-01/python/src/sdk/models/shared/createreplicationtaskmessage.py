from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateReplicationTaskMessage:
    r"""CreateReplicationTaskMessage
    <p/>
    """
    
    migration_type: MigrationTypeValueEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MigrationType') }})
    replication_instance_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationInstanceArn') }})
    replication_task_identifier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationTaskIdentifier') }})
    source_endpoint_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceEndpointArn') }})
    table_mappings: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableMappings') }})
    target_endpoint_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetEndpointArn') }})
    cdc_start_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CdcStartPosition') }})
    cdc_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CdcStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    cdc_stop_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CdcStopPosition') }})
    replication_task_settings: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationTaskSettings') }})
    resource_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceIdentifier') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    task_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskData') }})
    
