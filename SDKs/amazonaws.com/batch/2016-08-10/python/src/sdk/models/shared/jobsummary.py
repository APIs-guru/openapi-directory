from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import arraypropertiessummary
from . import containersummary
from . import nodepropertiessummary
from . import jobstatus_enum


@dataclass_json
@dataclass
class JobSummary:
    array_properties: Optional[arraypropertiessummary.ArrayPropertiesSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arrayProperties' }})
    container: Optional[containersummary.ContainerSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'container' }})
    created_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt' }})
    job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobArn' }})
    job_definition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobDefinition' }})
    job_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobId' }})
    job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobName' }})
    node_properties: Optional[nodepropertiessummary.NodePropertiesSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeProperties' }})
    started_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startedAt' }})
    status: Optional[jobstatus_enum.JobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusReason' }})
    stopped_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stoppedAt' }})
    
