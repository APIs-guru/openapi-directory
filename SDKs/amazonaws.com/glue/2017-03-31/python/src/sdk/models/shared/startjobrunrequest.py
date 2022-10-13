from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import notificationproperty
from . import workertype_enum


@dataclass_json
@dataclass
class StartJobRunRequest:
    allocated_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllocatedCapacity' }})
    arguments: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arguments' }})
    job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobName' }})
    job_run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobRunId' }})
    max_capacity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxCapacity' }})
    notification_property: Optional[notificationproperty.NotificationProperty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationProperty' }})
    number_of_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfWorkers' }})
    security_configuration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityConfiguration' }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timeout' }})
    worker_type: Optional[workertype_enum.WorkerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkerType' }})
    
