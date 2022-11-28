from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReplicationTaskAssessmentResult:
    r"""ReplicationTaskAssessmentResult
     The task assessment report in JSON format. 
    """
    
    assessment_results: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssessmentResults') }})
    assessment_results_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssessmentResultsFile') }})
    assessment_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssessmentStatus') }})
    replication_task_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationTaskArn') }})
    replication_task_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationTaskIdentifier') }})
    replication_task_last_assessment_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationTaskLastAssessmentDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    s3_object_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3ObjectUrl') }})
    
