from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class JobExecutionSummary:
    r"""JobExecutionSummary
    Contains a subset of information about a job execution.
    """
    
    execution_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionNumber') }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    last_updated_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedAt') }})
    queued_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queuedAt') }})
    started_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedAt') }})
    version_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionNumber') }})
    
