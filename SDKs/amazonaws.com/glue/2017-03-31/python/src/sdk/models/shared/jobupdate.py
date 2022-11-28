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
class JobUpdate:
    r"""JobUpdate
    Specifies information used to update an existing job definition. The previous job definition is completely overwritten by this information.
    """
    
    allocated_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllocatedCapacity') }})
    command: Optional[JobCommand] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Command') }})
    connections: Optional[ConnectionsList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Connections') }})
    default_arguments: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultArguments') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    execution_property: Optional[ExecutionProperty] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionProperty') }})
    glue_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlueVersion') }})
    log_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogUri') }})
    max_capacity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxCapacity') }})
    max_retries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxRetries') }})
    non_overridable_arguments: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NonOverridableArguments') }})
    notification_property: Optional[NotificationProperty] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationProperty') }})
    number_of_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfWorkers') }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Role') }})
    security_configuration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityConfiguration') }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timeout') }})
    worker_type: Optional[WorkerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkerType') }})
    
