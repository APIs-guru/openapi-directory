from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReplicationTaskAssessmentRunProgress:
    individual_assessment_completed_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndividualAssessmentCompletedCount' }})
    individual_assessment_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndividualAssessmentCount' }})
    
