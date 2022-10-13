from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class StartDetectMitigationActionsTaskPathParams:
    task_id: str = field(default=None, metadata={'path_param': { 'field_name': 'taskId', 'style': 'simple', 'explode': False }})
    

@dataclass
class StartDetectMitigationActionsTaskHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class StartDetectMitigationActionsTaskRequestBodyTarget:
    behavior_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'behaviorName' }})
    security_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityProfileName' }})
    violation_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'violationIds' }})
    

@dataclass_json
@dataclass
class StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange:
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class StartDetectMitigationActionsTaskRequestBody:
    actions: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    client_request_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRequestToken' }})
    include_only_active_violations: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeOnlyActiveViolations' }})
    include_suppressed_alerts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeSuppressedAlerts' }})
    target: StartDetectMitigationActionsTaskRequestBodyTarget = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    violation_event_occurrence_range: Optional[StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'violationEventOccurrenceRange' }})
    

@dataclass
class StartDetectMitigationActionsTaskRequest:
    path_params: StartDetectMitigationActionsTaskPathParams = field(default=None)
    headers: StartDetectMitigationActionsTaskHeaders = field(default=None)
    request: StartDetectMitigationActionsTaskRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartDetectMitigationActionsTaskResponse:
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    start_detect_mitigation_actions_task_response: Optional[shared.StartDetectMitigationActionsTaskResponse] = field(default=None)
    status_code: int = field(default=None)
    task_already_exists_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
