from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteReplicationTaskAssessmentRunMessage:
    replication_task_assessment_run_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationTaskAssessmentRunArn' }})
    
