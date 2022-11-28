from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateMlTransformRequest:
    input_record_tables: List[GlueTable] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputRecordTables') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    parameters: TransformParameters = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    role: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Role') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    glue_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlueVersion') }})
    max_capacity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxCapacity') }})
    max_retries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxRetries') }})
    number_of_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfWorkers') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timeout') }})
    transform_encryption: Optional[TransformEncryption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformEncryption') }})
    worker_type: Optional[WorkerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkerType') }})
    
