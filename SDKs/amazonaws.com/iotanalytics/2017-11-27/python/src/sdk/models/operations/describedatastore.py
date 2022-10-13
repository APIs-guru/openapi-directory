from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DescribeDatastorePathParams:
    datastore_name: str = field(default=None, metadata={'path_param': { 'field_name': 'datastoreName', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeDatastoreQueryParams:
    include_statistics: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeStatistics', 'style': 'form', 'explode': True }})
    

@dataclass
class DescribeDatastoreHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class DescribeDatastoreRequest:
    path_params: DescribeDatastorePathParams = field(default=None)
    query_params: DescribeDatastoreQueryParams = field(default=None)
    headers: DescribeDatastoreHeaders = field(default=None)
    

@dataclass
class DescribeDatastoreResponse:
    content_type: str = field(default=None)
    describe_datastore_response: Optional[shared.DescribeDatastoreResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
