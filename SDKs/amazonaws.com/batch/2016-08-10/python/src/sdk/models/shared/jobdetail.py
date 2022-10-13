from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import arraypropertiesdetail
from . import attemptdetail
from . import containerdetail
from . import jobdependency
from . import nodedetails
from . import nodeproperties
from . import platformcapability_enum
from . import retrystrategy
from . import jobstatus_enum
from . import jobtimeout


@dataclass_json
@dataclass
class JobDetail:
    array_properties: Optional[arraypropertiesdetail.ArrayPropertiesDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arrayProperties' }})
    attempts: Optional[List[attemptdetail.AttemptDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attempts' }})
    container: Optional[containerdetail.ContainerDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'container' }})
    created_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt' }})
    depends_on: Optional[List[jobdependency.JobDependency]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dependsOn' }})
    job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobArn' }})
    job_definition: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobDefinition' }})
    job_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobId' }})
    job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobName' }})
    job_queue: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobQueue' }})
    node_details: Optional[nodedetails.NodeDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeDetails' }})
    node_properties: Optional[nodeproperties.NodeProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeProperties' }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    platform_capabilities: Optional[List[platformcapability_enum.PlatformCapabilityEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platformCapabilities' }})
    propagate_tags: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'propagateTags' }})
    retry_strategy: Optional[retrystrategy.RetryStrategy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retryStrategy' }})
    started_at: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startedAt' }})
    status: jobstatus_enum.JobStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusReason' }})
    stopped_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stoppedAt' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    timeout: Optional[jobtimeout.JobTimeout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    
