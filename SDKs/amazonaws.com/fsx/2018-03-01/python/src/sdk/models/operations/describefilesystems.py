from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class DescribeFileSystemsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class DescribeFileSystemsXAmzTargetEnum(str, Enum):
    AWS_SIMBA_API_SERVICE_V20180301_DESCRIBE_FILE_SYSTEMS = "AWSSimbaAPIService_v20180301.DescribeFileSystems"


@dataclass
class DescribeFileSystemsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DescribeFileSystemsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeFileSystemsRequest:
    query_params: DescribeFileSystemsQueryParams = field(default=None)
    headers: DescribeFileSystemsHeaders = field(default=None)
    request: shared.DescribeFileSystemsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeFileSystemsResponse:
    bad_request: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    describe_file_systems_response: Optional[shared.DescribeFileSystemsResponse] = field(default=None)
    file_system_not_found: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
