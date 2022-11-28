from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobSummary:
    r"""JobSummary
    An object representing summary details of a job.
    """
    
    job_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobName') }})
    array_properties: Optional[ArrayPropertiesSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arrayProperties') }})
    container: Optional[ContainerSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('container') }})
    created_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt') }})
    job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobArn') }})
    job_definition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobDefinition') }})
    node_properties: Optional[NodePropertiesSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeProperties') }})
    started_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedAt') }})
    status: Optional[JobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusReason') }})
    stopped_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stoppedAt') }})
    
