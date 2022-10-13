from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateUsagePlanHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateUsagePlanRequestBodyQuota:
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    period: Optional[shared.QuotaPeriodTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'period' }})
    

@dataclass_json
@dataclass
class CreateUsagePlanRequestBodyThrottle:
    burst_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'burstLimit' }})
    rate_limit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rateLimit' }})
    

@dataclass_json
@dataclass
class CreateUsagePlanRequestBody:
    api_stages: Optional[List[shared.APIStage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiStages' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    quota: Optional[CreateUsagePlanRequestBodyQuota] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quota' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    throttle: Optional[CreateUsagePlanRequestBodyThrottle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'throttle' }})
    

@dataclass
class CreateUsagePlanRequest:
    headers: CreateUsagePlanHeaders = field(default=None)
    request: CreateUsagePlanRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateUsagePlanResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    usage_plan: Optional[shared.UsagePlan] = field(default=None)
    
