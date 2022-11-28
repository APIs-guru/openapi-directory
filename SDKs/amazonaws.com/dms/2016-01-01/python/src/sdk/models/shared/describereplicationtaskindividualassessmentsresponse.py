from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeReplicationTaskIndividualAssessmentsResponse:
    r"""DescribeReplicationTaskIndividualAssessmentsResponse
    <p/>
    """
    
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marker') }})
    replication_task_individual_assessments: Optional[List[ReplicationTaskIndividualAssessment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationTaskIndividualAssessments') }})
    
