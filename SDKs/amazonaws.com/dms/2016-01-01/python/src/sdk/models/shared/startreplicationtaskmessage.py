from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import startreplicationtasktypevalue_enum


@dataclass_json
@dataclass
class StartReplicationTaskMessage:
    cdc_start_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CdcStartPosition' }})
    cdc_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CdcStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    cdc_stop_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CdcStopPosition' }})
    replication_task_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationTaskArn' }})
    start_replication_task_type: startreplicationtasktypevalue_enum.StartReplicationTaskTypeValueEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartReplicationTaskType' }})
    
