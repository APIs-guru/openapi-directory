from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReplicationTaskAssessmentResult:
    assessment_results: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssessmentResults' }})
    assessment_results_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssessmentResultsFile' }})
    assessment_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssessmentStatus' }})
    replication_task_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationTaskArn' }})
    replication_task_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationTaskIdentifier' }})
    replication_task_last_assessment_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationTaskLastAssessmentDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    s3_object_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3ObjectUrl' }})
    
