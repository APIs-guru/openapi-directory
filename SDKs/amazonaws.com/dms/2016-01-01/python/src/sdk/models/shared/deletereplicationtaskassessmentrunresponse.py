from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteReplicationTaskAssessmentRunResponse:
    r"""DeleteReplicationTaskAssessmentRunResponse
    <p/>
    """
    
    replication_task_assessment_run: Optional[ReplicationTaskAssessmentRun] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationTaskAssessmentRun') }})
    
