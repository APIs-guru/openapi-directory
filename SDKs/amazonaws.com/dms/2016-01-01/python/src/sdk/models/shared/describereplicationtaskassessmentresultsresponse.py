from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeReplicationTaskAssessmentResultsResponse:
    r"""DescribeReplicationTaskAssessmentResultsResponse
    <p/>
    """
    
    bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketName') }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marker') }})
    replication_task_assessment_results: Optional[List[ReplicationTaskAssessmentResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationTaskAssessmentResults') }})
    
