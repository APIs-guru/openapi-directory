from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import gluetable
from . import transformparameters
from . import transformencryption
from . import workertype_enum


@dataclass_json
@dataclass
class CreateMlTransformRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    glue_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlueVersion' }})
    input_record_tables: List[gluetable.GlueTable] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputRecordTables' }})
    max_capacity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxCapacity' }})
    max_retries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxRetries' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    number_of_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfWorkers' }})
    parameters: transformparameters.TransformParameters = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    role: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Role' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timeout' }})
    transform_encryption: Optional[transformencryption.TransformEncryption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformEncryption' }})
    worker_type: Optional[workertype_enum.WorkerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkerType' }})
    
