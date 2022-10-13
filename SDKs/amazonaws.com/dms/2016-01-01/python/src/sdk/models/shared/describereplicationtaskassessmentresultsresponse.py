from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import replicationtaskassessmentresult


@dataclass_json
@dataclass
class DescribeReplicationTaskAssessmentResultsResponse:
    bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BucketName' }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    replication_task_assessment_results: Optional[List[replicationtaskassessmentresult.ReplicationTaskAssessmentResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationTaskAssessmentResults' }})
    
