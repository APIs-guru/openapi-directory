from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import replicationtaskassessmentrun


@dataclass_json
@dataclass
class DescribeReplicationTaskAssessmentRunsResponse:
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    replication_task_assessment_runs: Optional[List[replicationtaskassessmentrun.ReplicationTaskAssessmentRun]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationTaskAssessmentRuns' }})
    
