from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateUsagePlanKeyPathParams:
    usageplan_id: str = field(default=None, metadata={'path_param': { 'field_name': 'usageplanId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateUsagePlanKeyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateUsagePlanKeyRequestBody:
    key_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyId' }})
    key_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyType' }})
    

@dataclass
class CreateUsagePlanKeyRequest:
    path_params: CreateUsagePlanKeyPathParams = field(default=None)
    headers: CreateUsagePlanKeyHeaders = field(default=None)
    request: CreateUsagePlanKeyRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateUsagePlanKeyResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    usage_plan_key: Optional[shared.UsagePlanKey] = field(default=None)
    
