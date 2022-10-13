from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class JobExecutionSummary:
    execution_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionNumber' }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobId' }})
    last_updated_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedAt' }})
    queued_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queuedAt' }})
    started_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startedAt' }})
    version_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionNumber' }})
    
