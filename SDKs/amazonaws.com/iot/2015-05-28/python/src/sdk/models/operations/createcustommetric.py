from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateCustomMetricPathParams:
    metric_name: str = field(default=None, metadata={'path_param': { 'field_name': 'metricName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateCustomMetricHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class CreateCustomMetricRequestBodyMetricTypeEnum(str, Enum):
    STRING_LIST = "string-list"
    IP_ADDRESS_LIST = "ip-address-list"
    NUMBER_LIST = "number-list"
    NUMBER = "number"


@dataclass_json
@dataclass
class CreateCustomMetricRequestBody:
    client_request_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRequestToken' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    metric_type: CreateCustomMetricRequestBodyMetricTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricType' }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateCustomMetricRequest:
    path_params: CreateCustomMetricPathParams = field(default=None)
    headers: CreateCustomMetricHeaders = field(default=None)
    request: CreateCustomMetricRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateCustomMetricResponse:
    content_type: str = field(default=None)
    create_custom_metric_response: Optional[shared.CreateCustomMetricResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
