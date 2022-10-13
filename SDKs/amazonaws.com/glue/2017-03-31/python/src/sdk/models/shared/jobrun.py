from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import jobrunstate_enum
from . import notificationproperty
from . import predecessor
from . import workertype_enum


@dataclass_json
@dataclass
class JobRun:
    allocated_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllocatedCapacity' }})
    arguments: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arguments' }})
    attempt: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attempt' }})
    completed_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompletedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    execution_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionTime' }})
    glue_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlueVersion' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobName' }})
    job_run_state: Optional[jobrunstate_enum.JobRunStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobRunState' }})
    last_modified_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    log_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogGroupName' }})
    max_capacity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxCapacity' }})
    notification_property: Optional[notificationproperty.NotificationProperty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationProperty' }})
    number_of_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfWorkers' }})
    predecessor_runs: Optional[List[predecessor.Predecessor]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PredecessorRuns' }})
    previous_run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreviousRunId' }})
    security_configuration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityConfiguration' }})
    started_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timeout' }})
    trigger_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TriggerName' }})
    worker_type: Optional[workertype_enum.WorkerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkerType' }})
    
