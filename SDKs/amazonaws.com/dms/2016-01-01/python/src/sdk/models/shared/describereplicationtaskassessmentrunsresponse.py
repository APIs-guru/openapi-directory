from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeReplicationTaskAssessmentRunsResponse:
    r"""DescribeReplicationTaskAssessmentRunsResponse
    <p/>
    """
    
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marker') }})
    replication_task_assessment_runs: Optional[List[ReplicationTaskAssessmentRun]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationTaskAssessmentRuns') }})
    
