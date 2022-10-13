from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import replicationtaskindividualassessment


@dataclass_json
@dataclass
class DescribeReplicationTaskIndividualAssessmentsResponse:
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    replication_task_individual_assessments: Optional[List[replicationtaskindividualassessment.ReplicationTaskIndividualAssessment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationTaskIndividualAssessments' }})
    
