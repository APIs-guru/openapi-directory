from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StartReplicationTaskAssessmentRunMessage:
    assessment_run_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssessmentRunName' }})
    exclude: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Exclude' }})
    include_only: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncludeOnly' }})
    replication_task_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationTaskArn' }})
    result_encryption_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResultEncryptionMode' }})
    result_kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResultKmsKeyArn' }})
    result_location_bucket: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResultLocationBucket' }})
    result_location_folder: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResultLocationFolder' }})
    service_access_role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceAccessRoleArn' }})
    
