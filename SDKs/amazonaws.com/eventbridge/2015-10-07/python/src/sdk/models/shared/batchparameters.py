from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import batcharrayproperties
from . import batchretrystrategy


@dataclass_json
@dataclass
class BatchParameters:
    array_properties: Optional[batcharrayproperties.BatchArrayProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ArrayProperties' }})
    job_definition: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobDefinition' }})
    job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobName' }})
    retry_strategy: Optional[batchretrystrategy.BatchRetryStrategy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetryStrategy' }})
    
