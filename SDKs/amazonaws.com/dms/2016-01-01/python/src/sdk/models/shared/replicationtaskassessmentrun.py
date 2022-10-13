from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import replicationtaskassessmentrunprogress


@dataclass_json
@dataclass
class ReplicationTaskAssessmentRun:
    assessment_progress: Optional[replicationtaskassessmentrunprogress.ReplicationTaskAssessmentRunProgress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssessmentProgress' }})
    assessment_run_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssessmentRunName' }})
    last_failure_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastFailureMessage' }})
    replication_task_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationTaskArn' }})
    replication_task_assessment_run_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationTaskAssessmentRunArn' }})
    replication_task_assessment_run_creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationTaskAssessmentRunCreationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    result_encryption_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResultEncryptionMode' }})
    result_kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResultKmsKeyArn' }})
    result_location_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResultLocationBucket' }})
    result_location_folder: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResultLocationFolder' }})
    service_access_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceAccessRoleArn' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
