from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateAPICachePathParams:
    api_id: str = field(default=None, metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAPICacheHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class CreateAPICacheRequestBodyAPICachingBehaviorEnum(str, Enum):
    FULL_REQUEST_CACHING = "FULL_REQUEST_CACHING"
    PER_RESOLVER_CACHING = "PER_RESOLVER_CACHING"

class CreateAPICacheRequestBodyTypeEnum(str, Enum):
    T2_SMALL = "T2_SMALL"
    T2_MEDIUM = "T2_MEDIUM"
    R4_LARGE = "R4_LARGE"
    R4_XLARGE = "R4_XLARGE"
    R4_2_XLARGE = "R4_2XLARGE"
    R4_4_XLARGE = "R4_4XLARGE"
    R4_8_XLARGE = "R4_8XLARGE"
    SMALL = "SMALL"
    MEDIUM = "MEDIUM"
    LARGE = "LARGE"
    XLARGE = "XLARGE"
    LARGE_2_X = "LARGE_2X"
    LARGE_4_X = "LARGE_4X"
    LARGE_8_X = "LARGE_8X"
    LARGE_12_X = "LARGE_12X"


@dataclass_json
@dataclass
class CreateAPICacheRequestBody:
    api_caching_behavior: CreateAPICacheRequestBodyAPICachingBehaviorEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiCachingBehavior' }})
    at_rest_encryption_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'atRestEncryptionEnabled' }})
    transit_encryption_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transitEncryptionEnabled' }})
    ttl: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    type: CreateAPICacheRequestBodyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class CreateAPICacheRequest:
    path_params: CreateAPICachePathParams = field(default=None)
    headers: CreateAPICacheHeaders = field(default=None)
    request: CreateAPICacheRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAPICacheResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    concurrent_modification_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_api_cache_response: Optional[shared.CreateAPICacheResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
