from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import replicationtaskassessmentrun


@dataclass_json
@dataclass
class StartReplicationTaskAssessmentRunResponse:
    replication_task_assessment_run: Optional[replicationtaskassessmentrun.ReplicationTaskAssessmentRun] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationTaskAssessmentRun' }})
    
