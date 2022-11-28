from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateUsagePlanHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateUsagePlanRequestBodyQuota:
    r"""CreateUsagePlanRequestBodyQuota
    Quotas configured for a usage plan.
    """
    
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    period: Optional[shared.QuotaPeriodTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    

@dataclass_json
@dataclass
class CreateUsagePlanRequestBodyThrottle:
    r"""CreateUsagePlanRequestBodyThrottle
     The API request rate limits.
    """
    
    burst_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('burstLimit') }})
    rate_limit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rateLimit') }})
    

@dataclass_json
@dataclass
class CreateUsagePlanRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    api_stages: Optional[List[shared.APIStage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiStages') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    quota: Optional[CreateUsagePlanRequestBodyQuota] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quota') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    throttle: Optional[CreateUsagePlanRequestBodyThrottle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('throttle') }})
    

@dataclass
class CreateUsagePlanRequest:
    headers: CreateUsagePlanHeaders = field()
    request: CreateUsagePlanRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateUsagePlanResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    usage_plan: Optional[shared.UsagePlan] = field(default=None)
    
