from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateChannelPathParams:
    channel_name: str = field(default=None, metadata={'path_param': { 'field_name': 'channelName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateChannelHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateChannelRequestBodyChannelStorage:
    customer_managed_s3: Optional[shared.CustomerManagedChannelS3Storage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerManagedS3' }})
    service_managed_s3: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceManagedS3' }})
    

@dataclass_json
@dataclass
class UpdateChannelRequestBodyRetentionPeriod:
    number_of_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfDays' }})
    unlimited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unlimited' }})
    

@dataclass_json
@dataclass
class UpdateChannelRequestBody:
    channel_storage: Optional[UpdateChannelRequestBodyChannelStorage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelStorage' }})
    retention_period: Optional[UpdateChannelRequestBodyRetentionPeriod] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retentionPeriod' }})
    

@dataclass
class UpdateChannelRequest:
    path_params: UpdateChannelPathParams = field(default=None)
    headers: UpdateChannelHeaders = field(default=None)
    request: UpdateChannelRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateChannelResponse:
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
