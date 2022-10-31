from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DescribeDetectorPathParams:
    detector_model_name: str = field(default=None, metadata={'path_param': { 'field_name': 'detectorModelName', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeDetectorQueryParams:
    key_value: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'keyValue', 'style': 'form', 'explode': True }})
    

@dataclass
class DescribeDetectorHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeDetectorRequest:
    path_params: DescribeDetectorPathParams = field(default=None)
    query_params: DescribeDetectorQueryParams = field(default=None)
    headers: DescribeDetectorHeaders = field(default=None)
    

@dataclass
class DescribeDetectorResponse:
    content_type: str = field(default=None)
    describe_detector_response: Optional[shared.DescribeDetectorResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
