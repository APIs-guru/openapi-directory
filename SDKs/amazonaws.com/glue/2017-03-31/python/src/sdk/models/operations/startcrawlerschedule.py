from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class StartCrawlerScheduleXAmzTargetEnum(str, Enum):
    AWS_GLUE_START_CRAWLER_SCHEDULE = "AWSGlue.StartCrawlerSchedule"


@dataclass
class StartCrawlerScheduleHeaders:
    x_amz_target: StartCrawlerScheduleXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class StartCrawlerScheduleRequest:
    headers: StartCrawlerScheduleHeaders = field()
    request: shared.StartCrawlerScheduleRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartCrawlerScheduleResponse:
    content_type: str = field()
    status_code: int = field()
    entity_not_found_exception: Optional[Any] = field(default=None)
    no_schedule_exception: Optional[Any] = field(default=None)
    operation_timeout_exception: Optional[Any] = field(default=None)
    scheduler_running_exception: Optional[Any] = field(default=None)
    scheduler_transitioning_exception: Optional[Any] = field(default=None)
    start_crawler_schedule_response: Optional[dict[str, Any]] = field(default=None)
    
