from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateScheduledAuditPathParams:
    scheduled_audit_name: str = field(default=None, metadata={'path_param': { 'field_name': 'scheduledAuditName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateScheduledAuditHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateScheduledAuditRequestBodyDayOfWeekEnum(str, Enum):
    SUN = "SUN"
    MON = "MON"
    TUE = "TUE"
    WED = "WED"
    THU = "THU"
    FRI = "FRI"
    SAT = "SAT"

class UpdateScheduledAuditRequestBodyFrequencyEnum(str, Enum):
    DAILY = "DAILY"
    WEEKLY = "WEEKLY"
    BIWEEKLY = "BIWEEKLY"
    MONTHLY = "MONTHLY"


@dataclass_json
@dataclass
class UpdateScheduledAuditRequestBody:
    day_of_month: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dayOfMonth' }})
    day_of_week: Optional[UpdateScheduledAuditRequestBodyDayOfWeekEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dayOfWeek' }})
    frequency: Optional[UpdateScheduledAuditRequestBodyFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frequency' }})
    target_check_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetCheckNames' }})
    

@dataclass
class UpdateScheduledAuditRequest:
    path_params: UpdateScheduledAuditPathParams = field(default=None)
    headers: UpdateScheduledAuditHeaders = field(default=None)
    request: UpdateScheduledAuditRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateScheduledAuditResponse:
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_scheduled_audit_response: Optional[shared.UpdateScheduledAuditResponse] = field(default=None)
    
