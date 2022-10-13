from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DeleteReplicationTaskAssessmentRunXAmzTargetEnum(str, Enum):
    AMAZON_DM_SV20160101_DELETE_REPLICATION_TASK_ASSESSMENT_RUN = "AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun"


@dataclass
class DeleteReplicationTaskAssessmentRunHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: DeleteReplicationTaskAssessmentRunXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class DeleteReplicationTaskAssessmentRunRequest:
    headers: DeleteReplicationTaskAssessmentRunHeaders = field(default=None)
    request: shared.DeleteReplicationTaskAssessmentRunMessage = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteReplicationTaskAssessmentRunResponse:
    access_denied_fault: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    delete_replication_task_assessment_run_response: Optional[shared.DeleteReplicationTaskAssessmentRunResponse] = field(default=None)
    invalid_resource_state_fault: Optional[Any] = field(default=None)
    resource_not_found_fault: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
