from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import jobcommand
from . import connectionslist
from . import executionproperty
from . import notificationproperty
from . import workertype_enum


@dataclass_json
@dataclass
class CreateJobRequest:
    allocated_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllocatedCapacity' }})
    command: jobcommand.JobCommand = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Command' }})
    connections: Optional[connectionslist.ConnectionsList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Connections' }})
    default_arguments: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultArguments' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    execution_property: Optional[executionproperty.ExecutionProperty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionProperty' }})
    glue_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlueVersion' }})
    log_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogUri' }})
    max_capacity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxCapacity' }})
    max_retries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxRetries' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    non_overridable_arguments: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NonOverridableArguments' }})
    notification_property: Optional[notificationproperty.NotificationProperty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationProperty' }})
    number_of_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfWorkers' }})
    role: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Role' }})
    security_configuration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityConfiguration' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timeout' }})
    worker_type: Optional[workertype_enum.WorkerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkerType' }})
    
