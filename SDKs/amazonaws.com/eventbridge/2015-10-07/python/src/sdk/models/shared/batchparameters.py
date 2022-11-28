from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchParameters:
    r"""BatchParameters
    The custom parameters to be used when the target is an Batch job.
    """
    
    job_definition: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobDefinition') }})
    job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobName') }})
    array_properties: Optional[BatchArrayProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArrayProperties') }})
    retry_strategy: Optional[BatchRetryStrategy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetryStrategy') }})
    
