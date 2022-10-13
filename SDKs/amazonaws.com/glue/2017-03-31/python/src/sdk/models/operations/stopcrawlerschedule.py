from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class StopCrawlerScheduleXAmzTargetEnum(str, Enum):
    AWS_GLUE_STOP_CRAWLER_SCHEDULE = "AWSGlue.StopCrawlerSchedule"


@dataclass
class StopCrawlerScheduleHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: StopCrawlerScheduleXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class StopCrawlerScheduleRequest:
    headers: StopCrawlerScheduleHeaders = field(default=None)
    request: shared.StopCrawlerScheduleRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StopCrawlerScheduleResponse:
    content_type: str = field(default=None)
    entity_not_found_exception: Optional[Any] = field(default=None)
    operation_timeout_exception: Optional[Any] = field(default=None)
    scheduler_not_running_exception: Optional[Any] = field(default=None)
    scheduler_transitioning_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    stop_crawler_schedule_response: Optional[dict[str, Any]] = field(default=None)
    
