from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DescribeResourceCollectionHealthResourceCollectionTypeEnum(str, Enum):
    AWS_CLOUD_FORMATION = "AWS_CLOUD_FORMATION"
    AWS_SERVICE = "AWS_SERVICE"


@dataclass
class DescribeResourceCollectionHealthPathParams:
    resource_collection_type: DescribeResourceCollectionHealthResourceCollectionTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'ResourceCollectionType', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeResourceCollectionHealthQueryParams:
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class DescribeResourceCollectionHealthHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class DescribeResourceCollectionHealthRequest:
    path_params: DescribeResourceCollectionHealthPathParams = field(default=None)
    query_params: DescribeResourceCollectionHealthQueryParams = field(default=None)
    headers: DescribeResourceCollectionHealthHeaders = field(default=None)
    

@dataclass
class DescribeResourceCollectionHealthResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    describe_resource_collection_health_response: Optional[shared.DescribeResourceCollectionHealthResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
