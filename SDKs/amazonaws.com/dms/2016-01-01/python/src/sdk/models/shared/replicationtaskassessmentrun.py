from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReplicationTaskAssessmentRun:
    r"""ReplicationTaskAssessmentRun
    <p>Provides information that describes a premigration assessment run that you have started using the <code>StartReplicationTaskAssessmentRun</code> operation.</p> <p>Some of the information appears based on other operations that can return the <code>ReplicationTaskAssessmentRun</code> object.</p>
    """
    
    assessment_progress: Optional[ReplicationTaskAssessmentRunProgress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssessmentProgress') }})
    assessment_run_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssessmentRunName') }})
    last_failure_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastFailureMessage') }})
    replication_task_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationTaskArn') }})
    replication_task_assessment_run_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationTaskAssessmentRunArn') }})
    replication_task_assessment_run_creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationTaskAssessmentRunCreationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    result_encryption_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResultEncryptionMode') }})
    result_kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResultKmsKeyArn') }})
    result_location_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResultLocationBucket') }})
    result_location_folder: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResultLocationFolder') }})
    service_access_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceAccessRoleArn') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
