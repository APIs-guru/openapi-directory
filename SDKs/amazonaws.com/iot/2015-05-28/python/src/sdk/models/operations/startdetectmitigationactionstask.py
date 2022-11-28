from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class StartDetectMitigationActionsTaskPathParams:
    task_id: str = field(metadata={'path_param': { 'field_name': 'taskId', 'style': 'simple', 'explode': False }})
    

@dataclass
class StartDetectMitigationActionsTaskHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class StartDetectMitigationActionsTaskRequestBodyTarget:
    r"""StartDetectMitigationActionsTaskRequestBodyTarget
     The target of a mitigation action task. 
    """
    
    behavior_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('behaviorName') }})
    security_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityProfileName') }})
    violation_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('violationIds') }})
    

@dataclass_json
@dataclass
class StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange:
    r"""StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange
     Specifies the time period of which violation events occurred between. 
    """
    
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class StartDetectMitigationActionsTaskRequestBody:
    actions: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    client_request_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientRequestToken') }})
    target: StartDetectMitigationActionsTaskRequestBodyTarget = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    include_only_active_violations: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeOnlyActiveViolations') }})
    include_suppressed_alerts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeSuppressedAlerts') }})
    violation_event_occurrence_range: Optional[StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('violationEventOccurrenceRange') }})
    

@dataclass
class StartDetectMitigationActionsTaskRequest:
    headers: StartDetectMitigationActionsTaskHeaders = field()
    path_params: StartDetectMitigationActionsTaskPathParams = field()
    request: StartDetectMitigationActionsTaskRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartDetectMitigationActionsTaskResponse:
    content_type: str = field()
    status_code: int = field()
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    start_detect_mitigation_actions_task_response: Optional[shared.StartDetectMitigationActionsTaskResponse] = field(default=None)
    task_already_exists_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
