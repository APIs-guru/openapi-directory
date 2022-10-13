from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import jobexecutionstatus_enum


@dataclass_json
@dataclass
class JobExecution:
    approximate_seconds_before_timed_out: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approximateSecondsBeforeTimedOut' }})
    execution_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionNumber' }})
    job_document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobDocument' }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobId' }})
    last_updated_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedAt' }})
    queued_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queuedAt' }})
    started_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startedAt' }})
    status: Optional[jobexecutionstatus_enum.JobExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_details: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusDetails' }})
    thing_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingName' }})
    version_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionNumber' }})
    
