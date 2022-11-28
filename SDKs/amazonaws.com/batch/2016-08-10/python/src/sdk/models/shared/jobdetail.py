from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobDetail:
    r"""JobDetail
    An object representing an Batch job.
    """
    
    job_definition: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobDefinition') }})
    job_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobName') }})
    job_queue: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobQueue') }})
    started_at: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedAt') }})
    status: JobStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    array_properties: Optional[ArrayPropertiesDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arrayProperties') }})
    attempts: Optional[List[AttemptDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attempts') }})
    container: Optional[ContainerDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('container') }})
    created_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt') }})
    depends_on: Optional[List[JobDependency]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependsOn') }})
    job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobArn') }})
    node_details: Optional[NodeDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeDetails') }})
    node_properties: Optional[NodeProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeProperties') }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    platform_capabilities: Optional[List[PlatformCapabilityEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformCapabilities') }})
    propagate_tags: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propagateTags') }})
    retry_strategy: Optional[RetryStrategy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryStrategy') }})
    status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusReason') }})
    stopped_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stoppedAt') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    timeout: Optional[JobTimeout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    
