from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CancelReplicationTaskAssessmentRunXAmzTargetEnum(str, Enum):
    AMAZON_DM_SV20160101_CANCEL_REPLICATION_TASK_ASSESSMENT_RUN = "AmazonDMSv20160101.CancelReplicationTaskAssessmentRun"


@dataclass
class CancelReplicationTaskAssessmentRunHeaders:
    x_amz_target: CancelReplicationTaskAssessmentRunXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CancelReplicationTaskAssessmentRunRequest:
    headers: CancelReplicationTaskAssessmentRunHeaders = field()
    request: shared.CancelReplicationTaskAssessmentRunMessage = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CancelReplicationTaskAssessmentRunResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_fault: Optional[Any] = field(default=None)
    cancel_replication_task_assessment_run_response: Optional[shared.CancelReplicationTaskAssessmentRunResponse] = field(default=None)
    invalid_resource_state_fault: Optional[Any] = field(default=None)
    resource_not_found_fault: Optional[Any] = field(default=None)
    
