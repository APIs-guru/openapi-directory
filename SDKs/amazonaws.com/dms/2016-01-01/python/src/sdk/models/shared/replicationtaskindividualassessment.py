from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReplicationTaskIndividualAssessment:
    individual_assessment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndividualAssessmentName' }})
    replication_task_assessment_run_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationTaskAssessmentRunArn' }})
    replication_task_individual_assessment_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationTaskIndividualAssessmentArn' }})
    replication_task_individual_assessment_start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationTaskIndividualAssessmentStartDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
