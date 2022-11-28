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
class UpdateMlTransformRequest:
    transform_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    glue_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlueVersion') }})
    max_capacity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxCapacity') }})
    max_retries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxRetries') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    number_of_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfWorkers') }})
    parameters: Optional[TransformParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Role') }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timeout') }})
    worker_type: Optional[WorkerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkerType') }})
    
